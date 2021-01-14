import React from 'react';
import styled from 'styled-components';

const StyledVideoDetail = styled.div`
    border-right: 2px solid black;
    color: white;
    display: grid;
    font-size: 18px;
    grid-template-rows: 500px repeat(3, auto);
    justify-content: center;
    margin: 24px 36px 24px auto;
    padding-right: 24px;
    width: 60vw;

    .loading {
        color: white;
        font-size: 48px;
        text-align: center;
        width: 100%;
    }

    .video-player {
        border: 2px solid black;
        border-radius: 5px;
        height: 95%;
        width: 100%;
    }

    .title {
        font-size: 24px;
    }

    .author {
        margin: 16px 0;
    }

    .description {
        margin-bottom: 24px;
    }

    @media (max-width: 1200px) {
        border-bottom: 2px solid black;
        border-right: none;
        grid-template-rows: 400px repeat(3, auto);
        grid-column-start: 1;
        grid-column-end: 3;
        margin: 24px auto;
        margin-top: 0;
        padding-right: 0px;
        width: 70vw;
    }

    @media (max-width: 768px) {
        grid-template-rows: 300px repeat(3, auto);
    }

    @media (max-width: 500px) {
        width: 90vw;
    }
`

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div className="loading">Loading...</div>
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