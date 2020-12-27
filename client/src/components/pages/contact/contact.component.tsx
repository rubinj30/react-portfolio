import { ReactNode } from 'react';
import { FullName } from '../../atoms/name/name.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css';

export const Contact = () => {
  return (
    <div className='flex flex-column items-center justify-center pt4'>
      <FullName type='page' />
      <div className='flex flex-column justify-center'>
        <ContactItem text='jonathan.a.rubin@gmail.com' link='mailto:jonathan.a.rubin@gmail.com' icon={<FaEnvelope />} />
        <ContactItem link='https://github.com/rubinj30' icon={<FaGithub />} />
        <ContactItem link='https://www.linkedin.com/in/jonathan-rubin/' icon={<FaLinkedin />} text='LinkedIn Profile' />
      </div>
    </div>
  );
};

const ContactItem = ({ link, icon, text }: { link: string; icon: ReactNode; text?: string }) => (
  <StyledLink link={link} hoverUnderline={true} className='linkWrapper flex justify-center items-center'>
    <div className='flex'>
      <div>{icon}</div>
      <div className='contactItem'>{text || link}</div>
    </div>
  </StyledLink>
);
