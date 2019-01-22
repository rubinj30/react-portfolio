import React, { Component } from 'react';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import {
    FaLaptopCode,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaSmile
} from 'react-icons/fa';
import './dropdown.css';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';

const DropdownSquare = ({
    className,
    title,
    icon,
    link
}: {
    className?: string;
    title: string;
    icon: any;
    link?: string;
}) => {
    const iconLink = link ? link : title.toLowerCase();
    return (
        <StyledLink link={iconLink} hoverUnderline={false} color={'black'}>
            <div className={`square ${className}`}>
                <div className="pv2">{title}</div>
                <div className="iconStyle">{icon}</div>
            </div>
        </StyledLink>
    );
};

type Props = {
    setRef: any;
    handleClickOutside: any;
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
                    <DropdownSquare
                        title="Projects"
                        className={''}
                        icon={<FaLaptopCode color={'red'} />}
                    />
                    <DropdownSquare
                        title="About"
                        icon={<FaSmile color="#FBD043" />}
                    />
                    <DropdownSquare
                        title="Contact"
                        className={''}
                        icon={<FaEnvelope color="green" />}
                    />
                    <DropdownSquare
                        link="https://github.com/rubinj30"
                        title="GitHub"
                        icon={<FaGithub />}
                    />
                    <DropdownSquare
                        link="https://www.linkedin.com/in/jonathan-rubin/"
                        title="LinkedIn"
                        className={''}
                        icon={<FaLinkedin color="0077B5" />}
                    />
                    <DropdownSquare
                        link="/"
                        title="Search"
                        className={''}
                        icon={<UserInitial letter="J" size="large" />}
                    />
                </div>
            </div>
        );
    }
}
