import React from 'react';
import { Name } from '../../atoms/name/name.component';
import { Search } from '../../molecules/search/search.component';

export const HomePage = () => {
    return (
        <div className="flex flex-column items-center">
            <Name />
            <Search />
        </div>
    );
};
