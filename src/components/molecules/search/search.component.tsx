import React, { Component } from 'react';
import './search.css';

type State = {
    searchText: string;
    areResultsShowing: boolean;
};

const fakeResults = [
    { text: 'projects', link: '/projects' },
    { text: 'work', link: '/projects' },
    { text: 'about', link: '/about' },
    { text: 'contact', link: '/contact' },
    { text: 'work', link: '/projects' },
    { text: 'work', link: '/projects' }
];

export class Search extends Component<{}, State> {
    state = {
        searchText: '',
        areResultsShowing: false
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchText: e.currentTarget.value });
    };

    render() {
        const { searchText } = this.state;
        return (
            <div className="containerWrapper">
                <div className="searchContainer">
                    <input
                        placeholder="Search here"
                        onChange={this.handleChange}
                    />
                </div>
                {searchText.length > 2 ? (
                    <div className="w-97 resultsContainer">
                        {fakeResults.map((result, i) => {
                            return <div key={i}>{result.text}</div>;
                        })}
                    </div>
                ) : null}
            </div>
        );
    }
}
