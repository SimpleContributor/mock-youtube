import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <iframe src={videoSrc} title='Video Player'></iframe>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.channelTitle}</div>
            <div>{video.snippet.description}</div>
        </div>
    )
}

export default VideoDetail;