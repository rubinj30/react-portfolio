import React, { Component } from 'react';
import './hamburger.css';

type Props = {
    className?: string;
    showDropdown: any;
    setRef: any;
    isPagesDropdownOpen: boolean;
};

export class Hamburger extends Component<Props, {}> {
    render() {
        const { isPagesDropdownOpen, showDropdown, setRef, className } = this.props;
        return (
            <div
                className={`${className}`}
                ref={setRef}
                onMouseDown={showDropdown}
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
