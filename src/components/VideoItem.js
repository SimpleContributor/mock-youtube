import React from 'react';
import styled from 'styled-components';

const StyledVideoItem = styled.div`
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    margin: 0 12px;
    width: 95%;

    img {
        border-radius: 5px;
        height: 90px;
        margin-right: 12px;
    }

    .sm-screen {
        display: none;
    }

    &:not(:first-child) {
        margin-top: 24px;
    }

    .author {
        margin-top: 8px;
    }

    @media (max-width: 1200px) {
        margin: 0;
        width: 100%;

        img {
            height: 120px;
        }

        .lg-screen {
            display: none;
        }
    
        .sm-screen {
            display: block;
        }

        .video-text {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        img {
            height: 90px;
        }

        .lg-screen {
            display: block;
        }
    
        .sm-screen {
            display: none;
        }
    }
`

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <StyledVideoItem onClick={() => onVideoSelect(video)}>
            <img 
                className="lg-screen"
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.default.url} 
            />
            <img 
                className="sm-screen"
                alt={video.snippet.title} 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="video-text">
                <div>{video.snippet.title}</div>
                <div className="author">{video.snippet.channelTitle}</div>
            </div>
        </StyledVideoItem>
    )
}

export default VideoItem;
