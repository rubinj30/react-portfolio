import React from 'react';
import './hamburger.css';

type Props = {
    toggleDropdown: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Hamburger = ({ toggleDropdown }: Props) => {
    return (
        <div className="hamburger" onClick={toggleDropdown}>
            <div className="hamburgerLayer w2 br-50" />
            <div className="hamburgerLayer w2" />
            <div className="hamburgerLayer w2" />
        </div>
    );
};
