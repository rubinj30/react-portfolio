import React, { Component } from 'react';
import './dropdown.css';

type Props = {
    setRef: any;
    handleClickOutside: any;
    children?: any;
};

// This is a modular component that can be re-used and passed the contents of the dropdown //#endregion
// as children
export class Dropdown extends Component<Props, {}> {
    componentDidMount() {
        document.addEventListener('mousedown', this.props.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener(
            'mousedown',
            this.props.handleClickOutside
        );
    }
    render() {
        const { children, setRef } = this.props;
        return (
            <div className="dropdownContainer">
                <div className="dropdown" ref={setRef}>
                    {children}
                </div>
            </div>
        );
    }
}
