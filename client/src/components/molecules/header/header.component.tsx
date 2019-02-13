import React from 'react';
import { withRouter } from 'react-router-dom';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { PagesDropdown } from '../../organisms/page-dropdown/page-dropdown.component';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';
import { Search } from '../../molecules/search/search.component';
import { Name } from '../../atoms/name/name.component';
import './header.css';
import '../../../App.css';

type State = { isPagesDropdownOpen: boolean };

type Props = {
    location?: any;
};

class Header extends React.Component<Props, State> {
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
        const isHomePage = this.props.location.pathname === '/';
        return (
            <div className="w-100 h3 flex justify-center items-center mb3">
                <div className="w-90 flex justify-between items-center">
                    {isHomePage && (
                        <div className={`h3 ph3 flex items-center pt3`}>
                            <StyledLink
                                color="black"
                                hoverUnderline={true}
                                link={'/about'}
                                text="About"
                            />
                        </div>
                    )}
                    {/* if not on the homepage the search bar should show in the header */}
                    {!isHomePage && (
                        <StyledLink link="/">
                            <Name
                                text="Jonathan"
                                type="header"
                                className="dn dib-ns pt3"
                            />
                        </StyledLink>
                    )}
                    {!isHomePage && (
                        <Search
                            type={'headerSearch'}
                            placeholder="Search (Browse for now)"
                        />
                    )}
                    <div className="flex items-center pl2 pl4-l justify-between f6 pt3">
                        {/* CURRENTLY ALWAYS SHOWING PROJECTS ON HOMEPAGE */}
                        {/* {isHomePage && ( */}
                        <StyledLink
                            color="black"
                            hoverUnderline={true}
                            link={'/projects'}
                            text="Projects"
                        />
                        {/* )} */}
                        {/* <div className="w4 flex items-center justify-around"> */}
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
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter<any>(Header);
