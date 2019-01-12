import React, { Component } from 'react';
import './hamburger.css';

type Props = {
    showDropdown: any;
    setRef: any;
    isDropdownOpen: boolean;
};

export class Hamburger extends Component<Props, {}> {
    render() {
        return (
            <div
                className="hamburger"
                ref={this.props.setRef}
                onMouseDown={this.props.showDropdown}
            >
                <div className="hamburgerLayer w2" />
                <div className="hamburgerLayer w2" />
                <div className="hamburgerLayer w2" />
            </div>
        );
    }
}
