import React from 'react';
import VideoItem from './VideoItem';
import styled from 'styled-components';

const StyledVideoList = styled.div`
    display: grid;
    margin-top: 16px;

    @media (max-width: 1200px) {
        justify-content: center;
    }
`

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })

    return (
        <StyledVideoList>{renderedList}</StyledVideoList>
    )
}

export default VideoList;
