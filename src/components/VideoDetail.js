import React from 'react';
import styled from 'styled-components';

const StyledVideoDetail = styled.div`
    border-right: 2px solid black;
    color: white;
    display: grid;
    font-size: 18px;
    grid-template-rows: 600px repeat(3, auto);
    height: 800px;
    justify-content: center;
    margin: 24px auto;
    padding-right: 24px;
    width: 70vw;

    .video-player {
        height: 95%;
        width: 100%;
    }

    .title {
        font-size: 24px;
    }

    .author {

    }

    .description {
        
    }

    @media (max-width: 1200px) {
        border-right: none;
        grid-template-rows: 400px repeat(3, auto);
        height: 600px;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media (max-width: 768px) {
        grid-template-rows: 300px repeat(3, auto);
        height: 500px;
    }
`

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <StyledVideoDetail>
            <iframe className="video-player" src={videoSrc} title='Video Player'></iframe>
            <div className="title">{video.snippet.title}</div>
            <div className="author">{video.snippet.channelTitle}</div>
            <div className="description">{video.snippet.description}</div>
        </StyledVideoDetail>
    )
}

export default VideoDetail;