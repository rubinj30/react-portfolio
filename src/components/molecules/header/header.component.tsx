import React from 'react';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import '../../../App.css';

type Props = {
    showDropdown: any;
    isDropdownOpen: boolean;
    setRef: any;
};

export const Header = ({ showDropdown, isDropdownOpen, setRef }: Props) => {
    return (
        <div className="bg-dark w-100 h3 flex justify-center items-center">
            <div className="w-90 flex justify-between items-center">
                <div
                    className={`h3 ph3 flex items-center ${isDropdownOpen &&
                        'bg-metal'}`}
                >
                    <Hamburger
                        showDropdown={showDropdown}
                        setRef={setRef}
                        isDropdownOpen={isDropdownOpen}
                    />
                </div>
                <div className="white b ph3">Jonathan Rubin</div>
            </div>
        </div>
    );
};
