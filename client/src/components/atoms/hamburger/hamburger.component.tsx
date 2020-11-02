import React, { FC } from 'react';
import './hamburger.css';

// TODO: remove any types 
type Props = {
  className?: string;
  toggleDropdown: (open: boolean) => void;
  setRef: any;
  dropdownOpen: boolean;
};

export const Hamburger: FC<Props> = (props) => {
  const { dropdownOpen, toggleDropdown, setRef, className } = props;

  // TODO: move to helper function
  const genHamburgerIcon = () => {
    let hamburger: React.ReactChild[] = [];

    // only using for loop to generate static number of hamburger dots
    for (let i = 0; i < 9; i++) {
      hamburger.push(<div className='hamburgerDot' />);
    }
    return hamburger;
  }

  return (
    <div className={className} ref={setRef} onMouseDown={() => toggleDropdown(!dropdownOpen)}>
      <div className='hamburger'>
        {genHamburgerIcon()}
      </div>
      {dropdownOpen && (
        <>
          <div className='arrowTop' />
          <div className='arrowBottom' />
        </>
      )}
    </div>
  );
}