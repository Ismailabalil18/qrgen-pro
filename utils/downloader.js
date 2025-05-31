const ytdl = require('ytdl-core');
const path = require('path');
const fs = require('fs');

// Create downloads directory if it doesn't exist
const downloadsDir = path.join(__dirname, '../public/downloads');
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir, { recursive: true });
}

/**
 * Download a video from a URL
 * @param {string} url - The URL of the video to download
 * @returns {Promise<string>} - The URL to download the video from
 */
async function downloadVideo(url) {
    try {
        // Validate URL
        if (!ytdl.validateURL(url)) {
            throw new Error('Invalid YouTube URL');
        }

        // Get video info
        const info = await ytdl.getInfo(url);
        const videoTitle = info.videoDetails.title.replace(/[^\w\s]/gi, '');
        const fileName = `${videoTitle}-${Date.now()}.mp4`;
        const filePath = path.join(downloadsDir, fileName);

        // Download video
        const video = ytdl(url, {
            quality: 'highest',
            filter: 'videoandaudio'
        });

        // Create write stream
        const writeStream = fs.createWriteStream(filePath);

        // Handle download progress
        let downloadedBytes = 0;
        const totalBytes = parseInt(info.formats[0].contentLength);

        video.on('progress', (chunkLength, downloaded, total) => {
            downloadedBytes = downloaded;
            const progress = (downloaded / total) * 100;
            console.log(`Download progress: ${progress.toFixed(2)}%`);
        });

        // Handle download completion
        await new Promise((resolve, reject) => {
            video.pipe(writeStream);

            writeStream.on('finish', () => {
                console.log('Download completed');
                resolve();
            });

            writeStream.on('error', (error) => {
                console.error('Download error:', error);
                reject(error);
            });
        });

        // Return the download URL
        return `/downloads/${fileName}`;
    } catch (error) {
        console.error('Video download error:', error);
        throw new Error('Failed to download video: ' + error.message);
    }
}

module.exports = {
    downloadVideo
}; 