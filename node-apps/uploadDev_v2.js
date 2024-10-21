/* eslint-disable no-undef */
import fs, { readFileSync } from 'fs'
import path from 'path'
import { config } from 'dotenv'
import Client from 'ssh2-sftp-client'
import { Client as SSHClient } from 'ssh2'
import archiver from 'archiver'

config()

const sftp = new Client()
const ssh = new SSHClient()

const privateKeyPath = path.join(
    process.env.HOME,
    '.ssh',
    process.env.SSH_SK
)

// SSH connection settings
const sftpConfig = {
    host: process.env.SFTP_HOST,
    port: process.env.SSH_PORT || 22,
    username: process.env.SSH_USER,
    privateKey: fs.existsSync(privateKeyPath)
        ? readFileSync(privateKeyPath)
        : null,
    passphrase: process.env.SSH_PASSWORD,
    readyTimeout: 60000,
    keepaliveInterval: 10000,
    compression: 'none', // Disable compression for speed
}

console.log('SFTP config:', sftpConfig)

if (!sftpConfig.privateKey) {
    throw new Error(`Private key not found at ${privateKeyPath}`)
}

// Compress the 'dist' directory into a tar.gz file
const compressDirectoryToTarGz = (sourceDir, outPath) => {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(outPath)
        const archive = archiver('tar', {
            gzip: true,
            gzipOptions: { level: 9 }, // Maximum compression level
        })

        output.on('close', () => {
            console.log(`${archive.pointer()} total bytes`)
            console.log(`Tar.gz file ${outPath} created successfully.`)
            resolve()
        })

        archive.on('error', (err) => {
            reject(err)
        })

        archive.pipe(output)
        archive.directory(sourceDir, false)
        archive.finalize()
    })
}

// Function to show upload progress
const uploadFileWithProgress = async (
    localFilePath,
    remoteFilePath,
    chunkSize = 8 * 1024 * 1024
) => {
    const fileSize = fs.statSync(localFilePath).size
    let uploadedBytes = 0

    const readStream = fs.createReadStream(localFilePath, {
        highWaterMark: chunkSize,
    })

    readStream.on('data', (chunk) => {
        uploadedBytes += chunk.length
        const progress = ((uploadedBytes / fileSize) * 100).toFixed(2)
        console.log(`Upload progress: ${progress}%`)
    })

    await sftp.put(readStream, remoteFilePath)
    console.log(`Upload completed: ${localFilePath}`)
}

// Execute a command on the remote server (SSH)
const executeRemoteCommand = (command) => {
    return new Promise((resolve, reject) => {
        ssh.exec(command, (err, stream) => {
            if (err) {
                ssh.end()
                return reject(err)
            }
            stream
                .on('close', (code, signal) => {
                    console.log(
                        `Command executed with code ${code}, signal ${signal}`
                    )
                    resolve()
                })
                .on('data', (data) => {
                    console.log('STDOUT: ' + data)
                })
                .stderr.on('data', (data) => {
                    console.log('STDERR: ' + data)
                })
        })
    })
}

// Check if file exists on remote server
const checkFileExists = async (remoteFilePath) => {
    try {
        const fileStat = await sftp.stat(remoteFilePath)
        return !!fileStat
    } catch (err) {
        console.log(`File not found: ${remoteFilePath}`)
        return false
    }
}

sftp.connect(sftpConfig)
    .then(() => {
        ssh.connect({
            host: sftpConfig.host,
            port: sftpConfig.port,
            username: sftpConfig.username,
            privateKey: sftpConfig.privateKey,
            passphrase: sftpConfig.passphrase,
        })
    })
    .then(async () => {
        const remoteDir =
            '/home/u504367542/domains/helpcodeit.com/public_html/dev'
        const tempDir =
            '/home/u504367542/domains/helpcodeit.com/public_html/dev_tmp'
        const localDistDir = path.join(process.cwd(), 'dist')
        const tarGzFilePath = path.join(process.cwd(), 'dist.tar.gz')

        // Compress the dist directory into tar.gz
        console.log('Compressing dist directory...')
        await compressDirectoryToTarGz(localDistDir, tarGzFilePath)

        // Create temporary directory if it doesn't exist
        console.log(`Creating temporary directory: ${tempDir}`)
        await executeRemoteCommand(`mkdir -p ${tempDir}`)

        // Upload the tar.gz file with progress to temporary directory
        const remoteTarGzFile = path
            .join(tempDir, 'dist.tar.gz')
            .replace(/\\/g, '/')
        console.log(`Uploading tar.gz file to: ${remoteTarGzFile}`)
        await uploadFileWithProgress(tarGzFilePath, remoteTarGzFile)

        // Verify the tar.gz file exists on the server before proceeding
        const fileExists = await checkFileExists(remoteTarGzFile)
        if (!fileExists) {
            throw new Error(
                `File ${remoteTarGzFile} does not exist on the server.`
            )
        }

        // Remove the remote directory contents only after the upload is complete
        console.log(`Removing existing files in directory: ${remoteDir}`)
        await executeRemoteCommand(`rm -rf ${remoteDir}/*`)

        // Move the tar.gz file from temp directory to target directory
        console.log(`Moving tar.gz file to target directory: ${remoteDir}`)
        await executeRemoteCommand(
            `mv ${remoteTarGzFile} ${remoteDir}/dist.tar.gz`
        )

        // Extract the tar.gz file in the target directory
        console.log(`Extracting the tar.gz file in the target directory...`)
        await executeRemoteCommand(
            `tar -xzvf ${remoteDir}/dist.tar.gz -C ${remoteDir}`
        )

        // Optionally delete the tar.gz file from the server after extraction
        console.log(`Deleting tar.gz file from the target directory...`)
        await sftp.delete(`${remoteDir}/dist.tar.gz`)

        console.log('All files uploaded and extracted successfully.')
    })
    .catch((err) => {
        console.error('SFTP error:', err)
        ssh.end()
    })
    .finally(() => {
        sftp.end()
        ssh.end()
    })