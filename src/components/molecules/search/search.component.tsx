import React, { Component } from 'react';
import { Button } from '../../atoms/button/button.component';
import { seeds } from './seeds';
import { Dropdown } from '../dropdown/dropdown.component';
import './search.css';

type State = {
    searchText: string;
    areResultsShowing: boolean;
    hoveredIndex: number;
    notFound: {
        text: string;
        showing: boolean;
    };
    // change this to an array of the results
    //
    results: Result[];
};

type Result = {
    text: string;
    link: string;
    keywords: string[] | [];
};

export class Search extends Component<{}, State> {
    state = {
        searchText: '',
        areResultsShowing: false,
        hoveredIndex: -1,
        results: seeds,
        notFound: {
            text: '',
            showing: false
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText: string = e.currentTarget.value;
        const areResultsShowing: boolean =
            searchText && searchText.length > 1 ? true : false;
        this.setState({
            searchText,
            areResultsShowing,
            notFound: { showing: false, text: '' }
        });
    };

    handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { searchText } = this.state;
        console.log(e.key);
        e.key === 'Escape' && this.closeResults();
        e.key === 'ArrowDown' && this.arrowDown();
        e.key === 'ArrowUp' && this.arrowUp();
        e.key === 'Enter' && this.takeToResult();
    };

    takeToResult = () => {
        const { searchText, hoveredIndex, results } = this.state;
        if (hoveredIndex >= 0) {
            window.location.assign(results[hoveredIndex].link);
        } else {
            this.closeResults();
            this.setState({
                notFound: { text: searchText, showing: true },
                searchText: ''
            });
        }
    };

    closeResults = () => {
        this.setState({ areResultsShowing: false, hoveredIndex: -1 });
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

    handleResultMouseEnter = index => () => {
        this.setState({ hoveredIndex: index });
    };

    handleResultClick = async i => {
        console.log('woo');
        await this.setState({ hoveredIndex: i });
        this.takeToResult();
    };

    render() {
        const { areResultsShowing, hoveredIndex, notFound } = this.state;

        const belowSearch = areResultsShowing || notFound.showing;
        return (
            <div
                className={`containerWrapper relative ${belowSearch &&
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
                    <SearchResults
                        handleResultClick={this.handleResultClick}
                        areResultsShowing={areResultsShowing}
                        hoveredIndex={hoveredIndex}
                        handleResultMouseEnter={this.handleResultMouseEnter}
                        takeToResult={this.takeToResult}
                    />
                )}
                {notFound.showing && <NotFound text={notFound.text} />}
            </div>
        );
    }
}

const NotFound = ({ text }) => (
    <div className="br1 pa3 absolute resultsContainer">
        There are no results matching "{text}"
    </div>
);

const SearchResults = ({
    areResultsShowing,
    handleResultMouseEnter,
    hoveredIndex,
    handleResultClick,
    takeToResult
}: {
    areResultsShowing: boolean;
    handleResultMouseEnter: Function;
    hoveredIndex: number;
    handleResultClick: any;
    takeToResult: any;
}) => {
    return (
        <div
            className={`w-97 resultsContainer absolute  ${areResultsShowing &&
                'flatTopBr'}`}
        >
            {seeds.map((result, i) => {
                return (
                    <div
                        key={i}
                        onMouseEnter={handleResultMouseEnter(i)}
                        onClick={() => handleResultClick(i)}
                        className={`result ${hoveredIndex === i ? 'grayBg' : ''}
                    `}
                    >
                        {result.text}
                    </div>
                );
            })}
            <div className="flex justify-center" onClick={takeToResult}>
                <Button label="Jonathan Search" />
            </div>
        </div>
    );
};
