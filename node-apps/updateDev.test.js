/* eslint-disable no-undef */
import { config } from 'dotenv';
import path from 'path';
import recursive from 'recursive-readdir';
import * as ftp from 'basic-ftp';

config();

const client = new ftp.Client();
client.ftp.verbose = true; // Enable verbose logging for debugging

const ftpConfig = {
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    secure: "implicit",
};

console.log('FTP Configuration:', ftpConfig);

async function uploadFiles(files, localDir, remoteDir) {
    for (const localFilePath of files) {
        const relativePath = path.relative(localDir, localFilePath);
        const remoteFilePath = path.join(remoteDir, relativePath).replace(/\\/g, '/');

        try {
            await client.uploadFrom(localFilePath, remoteFilePath);
            console.log(`Uploaded: ${localFilePath} to ${remoteFilePath}`);
        } catch (err) {
            console.error('Error uploading file:', err);
        }
    }
    console.log('All files uploaded successfully.');
    client.close();
}

(async () => {
    try {
        await client.access(ftpConfig);
        console.log('FTP client ready');

        // Switch to active mode
        client.ftp.useList = true;

        const localDir = path.join(process.cwd(), 'dist');
        const remoteDir = '/dev';

        recursive(localDir, async (err, files) => {
            if (err) {
                console.error('Error reading files:', err);
                client.close();
                return;
            }

            await uploadFiles(files, localDir, remoteDir);
        });
    } catch (err) {
        console.error('FTP connection error:', err);
        if (client) client.close();
    }
})();