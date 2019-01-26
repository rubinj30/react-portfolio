import React, { Component } from 'react';
import { Button } from '../../atoms/button/button.component';
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
        const searchText: string = e.currentTarget.value;
        const areResultsShowing: boolean =
            searchText && searchText.length > 1 ? true : false;
        this.setState({ searchText, areResultsShowing });
    };

    render() {
        const { searchText, areResultsShowing } = this.state;
        return (
            <div
                className={`containerWrapper relative ${areResultsShowing &&
                    'flatBottomBr'}`}
            >
                <div className={`searchContainer`}>
                    <input
                        placeholder="Search here"
                        onChange={this.handleChange}
                    />
                </div>
                {searchText.length > 2 ? (
                    <div
                        className={`w-97 resultsContainer absolute  ${areResultsShowing &&
                            'flatTopBr'}`}
                    >
                        {fakeResults.map((result, i) => {
                            return <div key={i}>{result.text}</div>;
                        })}
                        <div className="flex justify-center">
                            <Button label="Jonathan Search" />
                        </div>
                    </div>
                ) : null}
                {/* <Button label="Jonathan Search" /> */}
            </div>
        );
    }
}
