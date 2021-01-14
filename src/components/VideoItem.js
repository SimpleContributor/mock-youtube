import React from 'react';
import styled from 'styled-components';

const StyledVideoItem = styled.div`
    color: white;
    display: flex;
    justify-content: flex-start;
    margin: auto;
    margin-top: 24px;
    width: 95%;

    .author {
        margin-top: 8px;
    }
`

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <StyledVideoItem onClick={() => onVideoSelect(video)}>
            <img 
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.default.url} 
            />
            <div className="video-text">
                <div>{video.snippet.title}</div>
                <div className="author">{video.snippet.channelTitle}</div>
            </div>
        </StyledVideoItem>
    )
}

export default VideoItem;
