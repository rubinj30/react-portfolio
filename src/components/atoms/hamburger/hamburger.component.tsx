import React, { Component } from 'react';
import './hamburger.css';

type Props = {
    className?: string;
    toggleDropdown: any;
    setRef: any;
    isPagesDropdownOpen: boolean;
};

export class Hamburger extends Component<Props, {}> {
    render() {
        const { isPagesDropdownOpen, toggleDropdown, setRef, className } = this.props;
        return (
            <div
                className={`${className}`}
                ref={setRef}
                onMouseDown={toggleDropdown}
            >
                <div className="hamburger">
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                    <div className="hamburgerDot" />
                </div>
                {isPagesDropdownOpen && (
                    <>
                        <div className="arrowTop" />
                        <div className="arrowBottom" />
                    </>
                )}
            </div>
        );
    }
}
