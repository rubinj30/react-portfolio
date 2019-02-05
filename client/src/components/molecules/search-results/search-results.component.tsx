import React from 'react';
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
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
};

export const SearchResults = ({
    handleResultMouseEnter,
    handleChange,
    handleKeyUp,
    hoveredIndex,
    handleResultClick,
    takeToResult,
    searchText,
    searchResults
}: Props) => {
    return (
        <div className={`w-97 resultsContainer absolute`}>
            <Input
                value={searchText}
                handleKeyUp={handleKeyUp}
                handleChange={handleChange}
            />
            <div className={`bt b--light-gray`}>
                {searchResults.map((result, i) => {
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
            </div>
            <div className="flex justify-center" onClick={takeToResult}>
                <Button label="Jonathan Search" />
            </div>
        </div>
    );
};
