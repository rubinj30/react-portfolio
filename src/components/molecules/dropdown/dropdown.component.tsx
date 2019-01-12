import React, { Component } from 'react';
import './dropdown.css';

type Props = {
    
};

const DropdownSection = ({className}: {className?: string}) => {
    return <div className={`section white ${className}`}>test</div>;
};
export class Dropdown extends Component {
    render() {
        return (
            <div className="bg-metal w5 dropdown">
                <DropdownSection className={''} />
                <DropdownSection className={''} />
                <DropdownSection className={''} />
                <DropdownSection className={''} />
                <DropdownSection className={''} />
                <DropdownSection className={'bottomBorderRadius'} />
            </div>
        );
    }
}
