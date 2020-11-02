import React, { FC } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { Hamburger } from '../../atoms/hamburger/hamburger.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { PagesDropdown } from '../../organisms/page-dropdown/page-dropdown.component';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';
import { Search } from '../../molecules/search/search.component';
import { Name } from '../../atoms/name/name.component';
import './header.css';
import '../../../App.css';


const Header: FC = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  // TODO: use useRef hook and get this working again, or figure out if there is a better way to to not use a ref
  //   public wrapRef;
  //   constructor(props) {
  //   super(props);
  //   wrapRef = React.createRef();
  // }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    // if (wrapRef && !wrapRef.contains(event.target)) {
    toggleDropdown();
  }

  const setRef = (r) => {
    // wrapRef = r;
  };

  const { pathname } = useLocation();
  const isHomePage = pathname === '/'
  return (
    <div className='w-100 h3 flex justify-center items-center mb3'>
      <div className='w-90 flex justify-between items-center'>
        {isHomePage && (
          <div className={`h3 ph3 flex items-center pt3`}>
            <StyledLink color='black' hoverUnderline={true} link={'/about'} text='About' />
          </div>
        )}
        {/* if not on the homepage the search bar should show in the header */}
        {!isHomePage && (
          <StyledLink link='/'>
            <Name text='Jonathan' type='header' className='dn dib-ns pt3' />
          </StyledLink>
        )}
        {/* {!isHomePage && <Search type={'headerSearch'} placeholder='Search (Browse for now)' />} */}
        <div className='flex items-center pl2 pl4-l justify-between f6 pt3 w4 w5-l'>
          {/* CURRENTLY ALWAYS SHOWING PROJECTS ON HOMEPAGE */}
          {/* {isHomePage && ( */}
          <StyledLink color='black' hoverUnderline={true} link={'/projects'} text='Projects' />
          {/* )} */}
          {/* <div className="w4 flex items-center just.ify-around"> */}
          <Hamburger
            className={'arrowContainer'}
            toggleDropdown={toggleDropdown}
            setRef={setRef}
            dropdownOpen={dropdownOpen}
          />
          {dropdownOpen && (
            <PagesDropdown setRef={setRef} handleClickOutside={handleClickOutside} toggleDropdown={toggleDropdown} />
          )}
          <UserInitial letter='J' size='small' />
        </div>
      </div>
    </div>
  );
}

export default withRouter<any>(Header);
