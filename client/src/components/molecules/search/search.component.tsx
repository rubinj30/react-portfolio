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
        const {
            areResultsShowing,
            hoveredIndex,
            notFound,
            searchText
        } = this.state;

        return (
            <div
                // if no results this container should have a box shadow, but if results are showing, the box-shadow wil be on that
                className={`wrapper relative ${!areResultsShowing &&
                    'wrapperBox'}`}
            >
                <div
                    // covering with z-index when results are open as results container will have a similar input
                    className={`searchContainer ${areResultsShowing && 'z-0'}`}
                >
                    <input
                        placeholder="Search here"
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                    />
                </div>
                {areResultsShowing && (
                    <SearchResults
                        handleResultClick={this.handleResultClick}
                        handleChange={this.handleChange}
                        handleKeyUp={this.handleKeyUp}
                        areResultsShowing={areResultsShowing}
                        hoveredIndex={hoveredIndex}
                        handleResultMouseEnter={this.handleResultMouseEnter}
                        takeToResult={this.takeToResult}
                        searchText={searchText}
                    />
                )}
                {notFound.showing && <NotFound text={notFound.text} />}
            </div>
        );
    }
}

const NotFound = ({ text }) => (
    <div className="br1 pa3 absolute resultsContainer">
        There are no results matching{' '}
        {text ? `"${text}"` : 'as this is still "under construction"'}
    </div>
);

const SearchResults = ({
    areResultsShowing,
    handleResultMouseEnter,
    handleChange,
    handleKeyUp,
    hoveredIndex,
    handleResultClick,
    takeToResult,
    searchText
}: {
    areResultsShowing: boolean;
    handleResultMouseEnter: Function;
    handleChange: any;
    handleKeyUp: any;
    hoveredIndex: number;
    handleResultClick: any;
    takeToResult: any;
    searchText: string;
}) => {
    return (
        <div
            className={`w-97 resultsContainer absolute  ${areResultsShowing &&
                'flatTopBr'}`}
        >
            <div className={`searchContainer`}>
                <input
                    className={'searchInput'}
                    placeholder="Search here"
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    value={searchText}
                />
            </div>
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
