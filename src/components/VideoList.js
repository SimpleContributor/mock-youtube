import React from 'react';
import VideoItem from './VideoItem';
import styled from 'styled-components';

const StyledVideoList = styled.div`
    display: grid;
    margin: 24px auto;
    margin-right: 36px;
    

    @media (max-width: 1200px) {
        margin: 16px auto;
        margin-top: 0;
        width: 70vw;
    }

    @media (max-width: 500px) {
        width: 90vw;
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
