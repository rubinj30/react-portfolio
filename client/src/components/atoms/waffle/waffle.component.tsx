import React, { FC, useRef } from 'react';
import './waffle.css';

// TODO: remove any types
type Props = {
  className?: string;
  toggleDropdown: () => void;
  ref: any;
  dropdownOpen: boolean;
};

export const Waffle: FC<Props> = (props) => {
  const { dropdownOpen, toggleDropdown, ref, className } = props;
  
  // TODO: move to helper function
  const genWaffleIcon = () => {
    let waffle: React.ReactChild[] = [];

    // only using for loop to generate static number of waffle dots
    for (let i = 0; i < 9; i++) {
      waffle.push(<div className='waffleDot' />);
    }
    return waffle;
  };

  return (
    <div className={className} ref={ref} onClick={() => toggleDropdown()}>
      <div className='waffle'>{genWaffleIcon()}</div>
      {dropdownOpen && (
        <>
          <div className='arrowTop' />
          <div className='arrowBottom' />
        </>
      )}
    </div>
  );
};
