import React, { Component } from 'react';
import { Button } from '../../atoms/button/button.component';
import './search.css';

type State = {
    searchText: string;
    areResultsShowing: boolean;
    hoveredIndex: number;
    // change this to an array of the results
    //
    results: any;
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
        areResultsShowing: false,
        hoveredIndex: -1,
        results: fakeResults
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText: string = e.currentTarget.value;
        const areResultsShowing: boolean =
            searchText && searchText.length > 1 ? true : false;
        this.setState({ searchText, areResultsShowing });
    };

    handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { searchText } = this.state;
        console.log(e.key);
        e.key === 'Escape' && this.closeResults();
        e.key === 'ArrowDown' && this.arrowDown();
        e.key === 'ArrowUp' && this.arrowUp();
        // if esc
        // if delete | backspace | e.which === 32
        // ArrowDown
        // ArrowUp
    };

    closeResults = () => {
        this.setState({ areResultsShowing: false });
    };

    arrowDown = () => {
        this.setState(({ hoveredIndex }: { hoveredIndex: number }) => {
            const newIndex =
                hoveredIndex < this.state.results.length - 1
                    ? hoveredIndex + 1
                    : 0;
            console.log(newIndex);
            return { hoveredIndex: newIndex };
        });
    };
    arrowUp = () => {
        this.setState(({ hoveredIndex }: { hoveredIndex: number }) => {
            const newIndex =
                hoveredIndex > 0
                    ? hoveredIndex - 1
                    : this.state.results.length - 1;
            console.log(newIndex);
            return { hoveredIndex: newIndex };
        });
    };
    render() {
        const { areResultsShowing, hoveredIndex } = this.state;
        return (
            <div
                className={`containerWrapper relative ${areResultsShowing &&
                    'flatBottomBr'}`}
            >
                <div className={`searchContainer`}>
                    <input
                        placeholder="Search here"
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                    />
                </div>
                {areResultsShowing && (
                    <div
                        className={`w-97 resultsContainer absolute  ${areResultsShowing &&
                            'flatTopBr'}`}
                    >
                        {fakeResults.map((result, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`result ${
                                        hoveredIndex === i ? 'grayBg' : ''
                                    }
                                    `}
                                >
                                    {result.text}
                                </div>
                            );
                        })}
                        <div className="flex justify-center">
                            <Button label="Jonathan Search" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
