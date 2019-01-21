import React from 'react';
import './styled-link.css';

type Props = {
    link: string;
    text: string;
    hoverUnderline: boolean;
    color: Color;
};

type Color = 'black' | 'white';

export const StyledLink = ({ link, text, hoverUnderline, color }: Props) => {
    let className: any = '';
    className =+ hoverUnderline ? 'underline-hover' : '';
    console.log(className);
    return (
        <a className={`no-underline ${className} ${color} f6`} href={link}>
            {text}
        </a>
    );
};
