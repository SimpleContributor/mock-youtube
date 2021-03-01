import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import styled from 'styled-components';
import './app.css';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: 7fr 3fr;
    grid-template-rows: 192px;


    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        grid-template-rows: 180px;
    }
`

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('Buildings');

    useEffect(() => {
        const onTermSubmit = async term => {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }

            })
            setVideos(response.data.items);
            setSelectedVideo(response.data.items[0]);
        }

        onTermSubmit(searchTerm);
    }, [searchTerm])

    // state = { videos: [], selectedVideo: null };

    // componentDidMount() {
    //     this.onTermSubmit('buildings');
    // }

    // onTermSubmit = async term => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             q: term
    //         }
    //     })

    //     this.setState({ 
    //         videos: response.data.items, 
    //         selectedVideo: response.data.items[0] 
    //     })
    // }

    // onVideoSelect = video => {
    //     this.setState({ selectedVideo: video })
    // }

    // <SearchBar onTermSubmit={this.onTermSubmit}/>
    // <VideoDetail video={this.state.selectedVideo} />
    // <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />

    // render() {
        return (
            <StyledApp>
                <SearchBar onTermSubmit={setSearchTerm}/>
                <VideoDetail video={selectedVideo} />
                <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
            </StyledApp>
        )
    // }
}

export default App;
