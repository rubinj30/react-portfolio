import React from 'react';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { PagesDropdown } from '../../organisms/page-dropdown/page-dropdown.component';
import './header.css';
import '../../../App.css';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';

type Props = {
    toggleDropdown: any;
    isPagesDropdownOpen: boolean;
    setRef: any;
    handleClickOutside: any;
};

export const Header = ({
    toggleDropdown,
    isPagesDropdownOpen,
    setRef,
    handleClickOutside
}: Props) => {
    return (
        <div className="w-100 h3 flex justify-center items-center">
            <div className="w-90 flex justify-between items-center">
                <div className={`h3 ph3 flex items-center`}>
                    <StyledLink
                        color="black"
                        hoverUnderline={true}
                        link={'/about'}
                        text="About"
                    />
                </div>
                <div className="flex items-center pl4 w5 justify-between f6">
                    <StyledLink
                        color="black"
                        hoverUnderline={true}
                        link={'/projects'}
                        text="Projects"
                    />
                    <Hamburger
                        className={'arrowContainer'}
                        toggleDropdown={toggleDropdown}
                        setRef={setRef}
                        isPagesDropdownOpen={isPagesDropdownOpen}
                    />
                    {isPagesDropdownOpen && (
                        <PagesDropdown
                        
                            setRef={setRef}
                            handleClickOutside={handleClickOutside}
                            toggleDropdown={toggleDropdown}
                        />
                    )}
                    <UserInitial letter="J" size="small" />
                </div>
            </div>
        </div>
    );
};
