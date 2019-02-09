import React, { ReactNode } from 'react';
import { Dropdown } from '../../molecules/dropdown/dropdown.component';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import {
    FaLaptopCode,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaSmile
} from 'react-icons/fa';
import './page-dropdown.css';

const DropdownSquare = ({
    className,
    title,
    icon,
    link,
    toggleDropdown
}: {
    className?: string;
    title: string;
    icon: ReactNode;
    link?: string;
    toggleDropdown?: (e: React.MouseEvent<any>) => void;
}) => {
    const iconLink = link ? link : `/${title.toLowerCase()}`;
    return (
        <StyledLink
            link={iconLink}
            hoverUnderline={false}
            color={'black'}
            handleClick={toggleDropdown}
        >
            <div className={`square ${className}`}>
                <div className="pv2">{title}</div>
                <div className="iconStyle">{icon}</div>
            </div>
        </StyledLink>
    );
};

type Props = {
    setRef: any;
    toggleDropdown: (e: React.MouseEvent<any>) => void;
    handleClickOutside: any;
    children?: any;
};

export const PagesDropdown = ({
    setRef,
    handleClickOutside,
    toggleDropdown
}: Props) => {
    return (
        <Dropdown
            setRef={setRef}
            handleClickOutside={handleClickOutside}
            className="pagesDropdownContainer"
        >
            <div className="pagesDropdown">
                <DropdownSquare
                    title="Projects"
                    icon={<FaLaptopCode color={'red'} />}
                    toggleDropdown={toggleDropdown}
                />
                <DropdownSquare
                    title="About"
                    icon={<FaSmile color="#FBD043" />}
                    toggleDropdown={toggleDropdown}
                />
                <DropdownSquare
                    title="Contact"
                    icon={<FaEnvelope color="green" />}
                    toggleDropdown={toggleDropdown}
                />
                <DropdownSquare
                    link="https://github.com/rubinj30"
                    title="GitHub"
                    icon={<FaGithub />}
                    toggleDropdown={toggleDropdown}
                />
                <DropdownSquare
                    link="https://www.linkedin.com/in/jonathan-rubin/"
                    title="LinkedIn"
                    icon={<FaLinkedin color="0077B5" />}
                    toggleDropdown={toggleDropdown}
                />
                <DropdownSquare
                    link="/"
                    title="Search"
                    className={'initialContainer'}
                    icon={<UserInitial letter="J" size="large" />}
                    toggleDropdown={toggleDropdown}
                />
            </div>
        </Dropdown>
    );
};
