import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchDropdown } from '../../organisms/search-dropdown/search-dropdown.component';
import { Input } from '../../atoms/input/input.component';
import { seeds } from './seeds';
import { SearchStyled } from './search.styles';
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

// TODO: clean up key press logic and abstract into custom hooks if needed
export const Search: FC<Props> = (props) => {
  const { push } = useHistory();
  const { placeholder } = props;
  const [resultsShowing, setResultsShowing] = useState(false);
  const [results, setResults] = useState<Result[]>(seeds);
  const [searchText, setSearchText] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.currentTarget.value;
    const areResultsShowing = searchText.length > 1 ? true : false;
    setResultsShowing(areResultsShowing);
    setSearchText(e.currentTarget.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Escape' && closeResults();
    e.key === 'ArrowDown' && arrowDown();
    e.key === 'ArrowUp' && arrowUp();
    e.key === 'Enter' && takeToResult();
  };

  const takeToResult = () => {
    if (hoveredIndex >= 0) {
      // route to external link
      window.location.assign(results[hoveredIndex].link);
    } else {
      closeResults();
    }
  };

  const closeResults = () => {
    setResultsShowing(false);
    setHoveredIndex(-1);
  };

  const arrowDown = () => {
    const newIndex = hoveredIndex < results.length ? hoveredIndex + 1 : 0;
    setHoveredIndex(newIndex);
  };

  const arrowUp = () => {
    const newIndex = hoveredIndex > 0 ? hoveredIndex - 1 : results.length - 1;
    setHoveredIndex(newIndex);
  };

  const handleResultClick = async (index) => {
    setHoveredIndex(index);
    takeToResult();
  };

  const scrollToElement = () => {
    const searchContainer = document.getElementById('searchWrapperID');
    searchContainer && searchContainer.scrollIntoView();
  };


  return (
    <SearchStyled id='searchWrapperID'>
      <div
        // if no results this container should have a box shadow, but if results are showing, the box-shadow wil be on that
        className={`innerWrapper relative ${!resultsShowing && 'wrapperBox'}`}
      >
        <Input
          handleKeyUp={handleKeyUp}
          handleChange={handleChange}
          className={resultsShowing ? 'z-0' : ''}
          onFocus={scrollToElement}
          placeholder={placeholder}
        />
        {resultsShowing && (
          <SearchDropdown
            handleResultClick={handleResultClick}
            handleChange={handleChange}
            handleKeyUp={handleKeyUp}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
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
    </SearchStyled>
  );
};

// TODO: use this similar to input in resultsContainer
// make resultsContainer its own atom!
const NotFound = ({ text }) => (
  <div className='br1 pa3 absolute resultsContainer'>There are no results matching {text ? `for "${text}"` : ''}</div>
);
