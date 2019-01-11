import React from 'react';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import '../../atoms/hamburger/hamburger.css';

export const Header = () => {
    return (
        <div className="bg-dark w-100 h3 flex justify-center items-center">
            <div className="w-90 flex justify-between items-center">
                <div className="hamburgerContainer h3 ph3 flex items-center">
                    <Hamburger />
                </div>
                <div className="white">Jonathan Rubin</div>
            </div>
        </div>
    );
};
