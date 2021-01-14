import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import styled from 'styled-components';
import './app.css';

const StyledApp = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 192px;


    @media(max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`

class App extends Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0] 
        })
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <StyledApp>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </StyledApp>
        )
    }
}

export default App;
