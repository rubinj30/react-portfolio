import React from 'react';
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
import { Dropdown } from '../../molecules/dropdown/dropdown.component';
import './search-dropdown.css';

type Props = {
  searchText: string;
  hoveredIndex: number;
  handleResultClick: any;
  searchResults: any;
  scrollToElement: Function;
  setHoveredIndex: (index: number) => void;
  takeToResult: () => void;
  closeResults: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export class SearchDropdown extends React.Component<Props, {}> {
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

  setRef = (r) => {
    this.wrapRef = r;
  };

  render() {
    const {
      hoveredIndex,
      handleResultClick,
      searchText,
      searchResults,
      scrollToElement,
      setHoveredIndex,
      handleChange,
      handleKeyUp,
      takeToResult,
    } = this.props;

    return (
      <Dropdown dropdownRef={this.setRef} handleClickOutside={this.handleClickOutside} className='searchDropdown'>
        <div className='searchDropdownContainer' id='searchWrapperID'>
          {/* <Input value={searchText} handleKeyUp={handleKeyUp} handleChange={handleChange} onFocus={scrollToElement} /> */}
          <div>
            {searchResults?.map((result, i) => {
              return (
                <div
                  key={result.text}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onClick={() => handleResultClick(i)}
                  className={`result ${hoveredIndex === i ? 'grayBg' : ''}`}
                >
                  {result.text}
                </div>
              );
            })}
          </div>
          <div className='flex justify-center' onClick={takeToResult}>
            <Button label='Jonathan Search' />
          </div>
        </div>
      </Dropdown>
    );
  }
}
