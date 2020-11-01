import React from 'react';
import { Name } from '../../atoms/name/name.component';
import { Search } from '../../molecules/search/search.component';
import './home-page.css';

export const HomePage = () => {
  return (
    <div className='flex flex-column items-center heightForScroll'>
      <div className='pt5'>Hi! My name is</div>
      <Name className='pb2' text='Jonathan' type='main' />
      <Search placeholder='Search here (Browse for now)' />
      <div className='pt5 w-90 w-70-l f7 flex justify-center'>
        <p>
          *My portfolio is still "under construction", but the basics are here! Click on the small gray boxes in the header to find your way around or even key
          through the currently seeded search results.
        </p>
      </div>
    </div>
  );
};
