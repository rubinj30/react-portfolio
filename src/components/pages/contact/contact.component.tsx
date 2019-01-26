import React, { ReactNode } from 'react';
import { First, Last } from '../../atoms/name/name.component';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './contact.css';

export const Contact = () => {
    return (
        <div className="flex flex-column items-center justify-center">
            <div className="flex">
                <First className="pv4" />
                <Last className="pv4" />
            </div>
            <div className="flex flex-column justify-center">
                <ContactItem
                    text="jonathan.a.rubin@gmail.com"
                    link="mailto:jonathan.a.rubin@gmail.com"
                    icon={<FaEnvelope />}
                />
                <ContactItem
                    link="https://github.com/rubinj30"
                    icon={<FaGithub />}
                />
                <ContactItem
                    link="https://www.linkedin.com/in/jonathan-rubin/"
                    icon={<FaLinkedin />}
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
    <a href={link} className="linkWrapper flex justify-center items-center">
        {icon}
        <div className="contactItem">{text || link}</div>
    </a>
);
