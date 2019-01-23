import React from 'react';
import { Name } from '../../atoms/name/name.component';
import { Search } from '../../molecules/search/search.component';

export const HomePage = () => {
    return (
        <div className="flex flex-column items-center">
            <Name />
            <Search />
            <div className="pt5 w-90 w-70-l f7">*My portfolio is still "under construction", but the basics are here! Click on the small gray boxes in the header to find your way around.</div>
        </div>
    );
};
