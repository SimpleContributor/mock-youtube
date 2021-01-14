import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
    border-bottom: 2px solid black;
    display: grid;
    height: 120px;
    justify-content: center;
    margin: 24px 16px 48px 0;
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 3;

    .search-form {
        margin: 0;
        padding: 0;
        width: 80vw;
    }

    .search-input-contianer {
        background-color: rgba(255, 0, 0, 0.75);
        border-radius: 12px;
        padding: 16px;
        padding-right: 36px;
        z-index: 1;
    }

    .search-input {
        border: 2px solid black;
        border-radius: 8px;
        font-size: 24px;
        height: 40px;
        margin: 0;
        padding: 8px;
        width: 100%;
        z-index: 10;
    }

    @media (max-width: 768px) {
        margin-bottom: 24px;
    }

    @media (max-width: 500px) {
        .search-form{
            width: 90vw;
        }
        
    }
`

class SearchBar extends Component {
    state = {term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <StyledSearchBar>
                <form className="search-form" onSubmit = {this.onFormSubmit}>
                    <div className="search-input-contianer">
                        <input
                            className="search-input"
                            type = "text"
                            value = {this.state.term}
                            onChange = {this.onInputChange}
                        >
                        </input>
                    </div>
                </form>
            </StyledSearchBar>
        );
    }
}

export default SearchBar;
