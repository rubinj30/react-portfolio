import React from 'react';
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
import { Dropdown } from '../dropdown/dropdown.component';
import './search-results.css';

type Props = {
    handleResultMouseEnter: Function;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    hoveredIndex: number;
    handleResultClick: any;
    takeToResult: () => void;
    searchText: string;
    searchResults: any;
    scrollToElement: Function;
    closeResults: () => void;
};

type State = {
    isSearchDropdownOpen: boolean;
};

export class SearchResults extends React.Component<Props, State> {
    state = {
        isSearchDropdownOpen: false
    };

    public wrapRef;
    constructor(props) {
        super(props);
        this.wrapRef = React.createRef();
    }

    handleClickOutside = (event: MouseEvent) => {
        if (this.wrapRef && !this.wrapRef.contains(event.target)) {
            this.props.closeResults();
        }
    };

    setRef = r => {
        this.wrapRef = r;
    };

    render() {
        const {
            handleResultMouseEnter,
            handleChange,
            handleKeyUp,
            hoveredIndex,
            handleResultClick,
            takeToResult,
            searchText,
            searchResults,
            scrollToElement
        } = this.props;
        return (
            <Dropdown
                setRef={this.setRef}
                handleClickOutside={this.handleClickOutside}
                className="searchResultsDropdown"
            >
                <div
                    className={`searchResultsContainer`}
                    id="searchWrapperID"
                >
                    <Input
                        value={searchText}
                        handleKeyUp={handleKeyUp}
                        handleChange={handleChange}
                        onFocus={scrollToElement}
                    />
                    <div className={`bt b--light-gray`}>
                        {searchResults.map((result, i) => {
                            return (
                                <div
                                    key={i}
                                    onMouseEnter={handleResultMouseEnter(i)}
                                    onClick={() => handleResultClick(i)}
                                    className={`result ${
                                        hoveredIndex === i ? 'grayBg' : ''
                                    }
                    `}
                                >
                                    {result.text}
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center" onClick={takeToResult}>
                        <Button label="Jonathan Search" />
                    </div>
                </div>
            </Dropdown>
        );
    }
}
