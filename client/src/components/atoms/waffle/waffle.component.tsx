import { FC } from 'react';
import './waffle.css';

// TODO: remove any types
type Props = {
  className?: string;
  toggleDropdown: () => void;
  waffleRef: any;
  dropdownOpen: boolean;
};

export const Waffle: FC<Props> = (props) => {
  const { dropdownOpen, toggleDropdown, waffleRef, className } = props;

  // TODO: move to helper function
  const genWaffleIcon = () => {
    let waffle: React.ReactChild[] = [];

    // only using for loop to generate static number of waffle dots
    for (let i = 0; i < 9; i++) {
      waffle.push(<div key={i} className='waffleDot' />);
    }
    return waffle;
  };

  return (
    <div className={className} onClick={() => toggleDropdown()}>
      <div className='waffle' ref={waffleRef}>
        {genWaffleIcon()}
      </div>
      {dropdownOpen && (
        <>
          <div className='arrowTop' />
          <div className='arrowBottom' />
        </>
      )}
    </div>
  );
};
