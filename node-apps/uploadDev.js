/* eslint-disable no-undef */
import { createRequire } from 'module'
import { config } from 'dotenv'
import path from 'path'

const require = createRequire(import.meta.url)
const FTPClient = require('ftp')

config()

const client = new FTPClient()

const ftpConfig = {
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
}

client.on('ready', () => {
    const localFilePath = path.join(process.cwd(), 'test.txt')
    const remoteFilePath = './test-server-dir/test.txt'

    client.put(localFilePath, remoteFilePath, (err) => {
        if (err) {
            console.error('Error uploading file:', err)
        } else {
            console.log('File uploaded successfully.')
        }
        client.end()
    })
})

client.on('error', (err) => {
    console.error('FTP connection error:', err)
})

client.connect(ftpConfig)
