import React, { ReactNode } from 'react';
import { FullName } from '../../atoms/name/name.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css';

export const Contact = () => {
    return (
        <div className="flex flex-column items-center justify-center">
            <FullName />
            <div className="flex flex-column justify-center">
                <ContactItem
                    text="jonathan.a.rubin@gmail.com"
                    link="mailto:jonathan.a.rubin@gmail.com"
                    icon={<div className="bg-red h2 w2" />}
                />
                <ContactItem
                    link="https://github.com/rubinj30"
                    icon={<div className="bg-red h2 w2" />}
                />
                <ContactItem
                    link="https://www.linkedin.com/in/jonathan-rubin/"
                    icon={<div className="bg-red h2 w2" />}
                    text="LinkedIn Profile"
                />
            </div>
        </div>
    );
};

const ContactItem = ({
    link,
    icon,
    text
}: {
    link: string;
    icon: ReactNode;
    text?: string;
}) => (
    <StyledLink
        link={link}
        hoverUnderline={true}
        className="linkWrapper flex justify-center items-center"
    >
        <div className="flex">
            <div>{icon}</div>
            <div className="contactItem">{text || link}</div>
        </div>
    </StyledLink>
);
