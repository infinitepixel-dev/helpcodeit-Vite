/* eslint-disable no-undef */
import { createRequire } from 'module'
import { config } from 'dotenv'
import path from 'path'
import recursive from 'recursive-readdir'

const require = createRequire(import.meta.url)
const FTPClient = require('ftp')

config()

const client = new FTPClient()

const ftpConfig = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    pasvTimeout: 10000, // Set a timeout for passive mode
    keepalive: 10000, // Keep the connection alive
    connTimeout: 10000 // Connection timeout
}

console.log('FTP Configuration:', ftpConfig)

client.on('ready', () => {
    const localDir = path.join(process.cwd(), 'dist')
    const remoteDir = '/dev'

    recursive(localDir, (err, files) => {
        if (err) {
            console.error('Error reading files:', err)
            client.end()
            return
        }

        uploadFiles(files, localDir, remoteDir)
    })
})

client.on('error', (err) => {
    console.error('FTP connection error:', err)
})

const uploadFiles = (files, localDir, remoteDir) => {
    const uploadNext = () => {
        if (files.length === 0) {
            console.log('All files uploaded successfully.')
            client.end()
            return
        }

        const localFilePath = files.shift()
        const relativePath = path.relative(localDir, localFilePath)
        const remoteFilePath = path
            .join(remoteDir, relativePath)
            .replace(/\\/g, '/')

        client.put(localFilePath, remoteFilePath, (err) => {
            if (err) {
                console.error('Error uploading file:', err)
            } else {
                console.log(`Uploaded: ${localFilePath} to ${remoteFilePath}`)
            }
            uploadNext()
        })
    }

    uploadNext()
}

client.connect(ftpConfig)
