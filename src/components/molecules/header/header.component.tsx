import React from 'react';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import '../../../App.css';

type Props = {
    toggleDropdown: (e: React.MouseEvent<HTMLDivElement>) => void;
    dropdownOpen: boolean;
};

export const Header = ({ toggleDropdown, dropdownOpen }: Props) => {
    return (
        <div className="bg-dark w-100 h3 flex justify-center items-center">
            <div className="w-90 flex justify-between items-center">
                <div
                    className={`h3 ph3 flex items-center ${dropdownOpen &&
                        'bg-metal'}`}
                >
                    <Hamburger toggleDropdown={toggleDropdown} />
                </div>
                <div className="white">Jonathan Rubin</div>
            </div>
        </div>
    );
};
