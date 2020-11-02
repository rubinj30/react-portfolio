import React, { FC, useState } from 'react';
import { SearchDropdown } from '../../organisms/search-dropdown/search-dropdown.component';
import { Input } from '../../atoms/input/input.component';
import { seeds } from './seeds';
import './search.css';

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

export const Search: FC<Props> = (props) => {
  const [resultsShowing, setResultsShowing] = useState(false)
  const [results, setResults] = useState<Result[]>([])
  const [searchText, setSearchText] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText: string = e.currentTarget.value;
    const areResultsShowing: boolean = searchText && searchText.length > 1 ? true : false;
    setResultsShowing(areResultsShowing)
    setSearchText(e.currentTarget.value)
    // results(true)
    // setState({
    //   // searchText,
    //   // resultsShowing,
    //   // notFound: { showing: false, text: '' },
    // });
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Escape' && closeResults();
    e.key === 'ArrowDown' && arrowDown();
    e.key === 'ArrowUp' && arrowUp();
    e.key === 'Enter' && takeToResult();
  };

  const takeToResult = () => {
    if (hoveredIndex >= 0) {
      window.location.assign(results[hoveredIndex].link);
    } else {
      closeResults();

      // setState({
      //   notFound: { text: searchText, showing: true },
      // });
    }
  };

  const closeResults = () => {
    setResultsShowing(false);
    setHoveredIndex(-1);
    // setState({ resultsShowing: false, hoveredIndex: -1 });
  };

  const arrowDown = () => {
    // setState(({ hoveredIndex }: { hoveredIndex: number }) => {
    //   const newIndex = hoveredIndex < state.results.length - 1 ? hoveredIndex + 1 : 0;
    //   return { hoveredIndex: newIndex };
    // });
    // TODO: probably need to fix, clean up types, and even combine with arrow up func
    const newIndex = hoveredIndex && hoveredIndex < results.length ? hoveredIndex + 1 : 0;
    setHoveredIndex(newIndex)
  };

  const arrowUp = () => {
    const newIndex = hoveredIndex && hoveredIndex < results.length ? hoveredIndex - 1 : 0;
    setHoveredIndex(newIndex)
    // setState(({ hoveredIndex }: { hoveredIndex: number }) => {
    //   const newIndex = hoveredIndex > 0 ? hoveredIndex - 1 : state.results.length - 1;
    //   return { hoveredIndex: newIndex };
    // });
  };

  const handleResultMouseEnter = (index) => () => {
    setHoveredIndex(index)
  };

  const handleResultClick = async (index) => {
    setHoveredIndex(index)
    takeToResult();
  };

  const scrollToElement = () => {
    const searchContainer = document.getElementById('searchWrapperID');
    searchContainer && searchContainer.scrollIntoView();
  };

  const { placeholder } = props;
  return (
    <div id='searchWrapperID' className={`searchContainer ${true ? 'pt3' : 'pt0'}`}>
      <div
        // if no results this container should have a box shadow, but if results are showing, the box-shadow wil be on that
        className={`innerWrapper relative ${!resultsShowing && 'wrapperBox'}`}
      >
        <Input
          handleKeyUp={handleKeyUp}
          handleChange={handleChange}
          className={`${resultsShowing && 'z-0'}`}
          onFocus={scrollToElement}
          placeholder={placeholder}
        />
        {resultsShowing && (
          <SearchDropdown
            handleResultClick={handleResultClick}
            handleChange={handleChange}
            handleKeyUp={handleKeyUp}
            hoveredIndex={hoveredIndex}
            handleResultMouseEnter={handleResultMouseEnter}
            takeToResult={takeToResult}
            searchText={searchText}
            scrollToElement={scrollToElement}
            // TODO: seeds for now, but eventually this will pull from DB
            searchResults={seeds}
            closeResults={closeResults}
          />
        )}

        {/* // TODO: */}
        {/* {notFound.showing && <NotFound text={notFound.text} />} */}
      </div>
    </div>
  );
}

// TODO: use this similar to input in resultsContainer
// make resultsContainer its own atom!
const NotFound = ({ text }) => (
  <div className='br1 pa3 absolute resultsContainer'>There are no results matching {text ? `for "${text}"` : ''}</div>
);
