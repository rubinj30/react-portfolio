import React, { Component } from 'react';
import './dropdown.css';

type Props = {
    setRef: any;
    handleClickOutside: any;
};

const DropdownSection = ({ className }: { className?: string }) => {
    return (
        <div className={`section ${className}`}>
            <div>X</div>
        </div>
    );
};
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
        return (
            <div className="dropdownContainer">
                <div className="dropdown" ref={this.props.setRef}>
                    <DropdownSection className={''} />
                    <DropdownSection className={''} />
                    <DropdownSection className={''} />
                    <DropdownSection className={''} />
                    <DropdownSection className={''} />
                    <DropdownSection className={''} />
                </div>
            </div>
        );
    }
}
