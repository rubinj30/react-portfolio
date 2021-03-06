import { FC, ReactNode } from 'react';
import { Dropdown } from '../../molecules/dropdown/dropdown.component';
import { UserInitial } from '../../atoms/user-initial/user-initial.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { FaLaptopCode, FaLinkedin, FaGithub, FaEnvelope, FaSmile } from 'react-icons/fa';
import './page-dropdown.css';

type DropdownSquareProps = {
  className?: string;
  title: string;
  icon: ReactNode;
  link?: string;
  toggleDropdown?: (e: React.MouseEvent<any>) => void;
};

export const DropdownSquare: FC<DropdownSquareProps> = ({ className, title, icon, link, toggleDropdown }) => {
  const iconLink = link ? link : `/${title.toLowerCase()}`;
  return (
    <StyledLink link={iconLink} hoverUnderline={false} color={'black'} handleClick={toggleDropdown}>
      <div className={`square ${className}`}>
        <div className='pv2'>{title}</div>
        <div className='iconStyle'>{icon}</div>
      </div>
    </StyledLink>
  );
};

type Props = {
  waffleRef: any;
  toggleDropdown: (e: React.MouseEvent) => void;
  handleClickOutside: any;
  children?: ReactNode;
};

export const PagesDropdown: FC<Props> = ({ waffleRef, handleClickOutside, toggleDropdown }) => {
  return (
    <Dropdown dropdownRef={waffleRef} handleClickOutside={handleClickOutside} className='pagesDropdownContainer'>
      <div className='pagesDropdown'>
        <DropdownSquare title='Projects' icon={<FaLaptopCode color={'red'} />} toggleDropdown={toggleDropdown} />
        <DropdownSquare title='About' icon={<FaSmile color='#FBD043' />} toggleDropdown={toggleDropdown} />
        <DropdownSquare title='Contact' icon={<FaEnvelope color='green' />} toggleDropdown={toggleDropdown} />
        <DropdownSquare link='https://github.com/rubinj30' title='GitHub' icon={<FaGithub />} toggleDropdown={toggleDropdown} />
        <DropdownSquare
          link='https://www.linkedin.com/in/jonathan-rubin/'
          title='LinkedIn'
          icon={<FaLinkedin color='0077B5' />}
          toggleDropdown={toggleDropdown}
        />
        <DropdownSquare
          link='/'
          title='Search'
          className={'initialContainer'}
          icon={<UserInitial letter='J' size='large' />}
          toggleDropdown={toggleDropdown}
        />
      </div>
    </Dropdown>
  );
};
