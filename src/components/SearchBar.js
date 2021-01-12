import React, { Component } from 'react';

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
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <div>
                        <label>Video Search</label>
                        <input
                            type = "text"
                            value = {this.state.term}
                            onChange = {this.onInputChange}
                        >
                        </input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
