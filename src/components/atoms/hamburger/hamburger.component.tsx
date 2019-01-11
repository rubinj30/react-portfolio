import React from 'react';
import './hamburger.css';

export const Hamburger = () => {
    return (
        <div className="hamburger">
            <div className="hamburgerLayer w2 br-50" />
            <div className="hamburgerLayer w2" />
            <div className="hamburgerLayer w2" />
        </div>
    );
};
