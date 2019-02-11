import React, { Component } from 'react';
import { SearchDropdown } from '../../organisms/search-dropdown/search-dropdown.component';
import { Input } from '../../atoms/input/input.component';
import { seeds } from './seeds';
import './search.css';

type State = {
    searchText: string;
    areResultsShowing: boolean;
    hoveredIndex: number;
    notFound: {
        text: string;
        showing: boolean;
    };
    results: Result[];
};

type Result = {
    text: string;
    link: string;
    keywords: string[] | [];
};

type Props = {
    className?: string;
    type?: string;
    placeholder?: string;
};

export class Search extends Component<Props, State> {
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
                notFound: { text: searchText, showing: true }
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
            return { hoveredIndex: newIndex };
        });
    };

    arrowUp = () => {
        this.setState(({ hoveredIndex }: { hoveredIndex: number }) => {
            const newIndex =
                hoveredIndex > 0
                    ? hoveredIndex - 1
                    : this.state.results.length - 1;
            return { hoveredIndex: newIndex };
        });
    };

    handleResultMouseEnter = index => () => {
        this.setState({ hoveredIndex: index });
    };

    handleResultClick = async i => {
        await this.setState({ hoveredIndex: i });
        this.takeToResult();
    };

    scrollToElement = () => {
        const searchContainer = document.getElementById('searchWrapperID');
        searchContainer && searchContainer.scrollIntoView();
    };

    render() {
        const {
            areResultsShowing,
            hoveredIndex,
            notFound,
            searchText
        } = this.state;
        const { placeholder } = this.props;
        return (
            <div
                id="searchWrapperID"
                className={`searchContainer ${true ? 'pt3' : 'pt0'}`}
            >
                <div
                    // if no results this container should have a box shadow, but if results are showing, the box-shadow wil be on that
                    className={`innerWrapper relative ${!areResultsShowing &&
                        'wrapperBox'}`}
                >
                    <Input
                        handleKeyUp={this.handleKeyUp}
                        handleChange={this.handleChange}
                        className={`${areResultsShowing && 'z-0'}`}
                        onFocus={this.scrollToElement}
                        placeholder={placeholder}
                    />
                    {areResultsShowing && (
                        <SearchDropdown
                            handleResultClick={this.handleResultClick}
                            handleChange={this.handleChange}
                            handleKeyUp={this.handleKeyUp}
                            hoveredIndex={hoveredIndex}
                            handleResultMouseEnter={this.handleResultMouseEnter}
                            takeToResult={this.takeToResult}
                            searchText={searchText}
                            scrollToElement={this.scrollToElement}
                            // TODO: seeds for now, but eventually this will pull from DB
                            searchResults={seeds}
                            closeResults={this.closeResults}
                        />
                    )}
                    {notFound.showing && <NotFound text={notFound.text} />}
                </div>
            </div>
        );
    }
}

// TODO: use this similar to input in resultsContainer
// make resultsContainer its own atom!
const NotFound = ({ text }) => (
    <div className="br1 pa3 absolute resultsContainer">
        There are no results matching {text ? `for "${text}"` : ''}
    </div>
);
