import React from 'react';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { PagesDropdown } from '../../organisms/page-dropdown/page-dropdown.component';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';
import './header.css';
import '../../../App.css';

type State = { isPagesDropdownOpen: boolean };

export class Header extends React.Component<{}, State> {
    state = {
        isPagesDropdownOpen: false
    };

    public wrapRef;
    constructor(props) {
        super(props);
        this.wrapRef = React.createRef();
    }

    toggleDropdown = () => {
        this.setState(
            ({ isPagesDropdownOpen }: { isPagesDropdownOpen: boolean }) => {
                return { isPagesDropdownOpen: !isPagesDropdownOpen };
            }
        );
    };

    handleClickOutside = (event: MouseEvent) => {
        if (this.wrapRef && !this.wrapRef.contains(event.target)) {
            this.toggleDropdown();
        }
    };

    setRef = r => {
        this.wrapRef = r;
    };

    render() {
        const { isPagesDropdownOpen } = this.state;
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
                            toggleDropdown={this.toggleDropdown}
                            setRef={this.setRef}
                            isPagesDropdownOpen={isPagesDropdownOpen}
                        />
                        {isPagesDropdownOpen && (
                            <PagesDropdown
                                setRef={this.setRef}
                                handleClickOutside={this.handleClickOutside}
                                toggleDropdown={this.toggleDropdown}
                            />
                        )}
                        <UserInitial letter="J" size="small" />
                    </div>
                </div>
            </div>
        );
    }
}
