import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './styled-link.css';

type Props = {
    link: string;
    text?: string;
    hoverUnderline: boolean;
    color?: Color;
    children?: ReactNode;
};

type Color = 'black' | 'white';

export const StyledLink = ({
    link,
    text,
    hoverUnderline,
    color,
    children
}: Props) => {
    let className: any = '';
    className = +hoverUnderline ? 'underline-hover' : '';
    console.log(className);
    return (
        <Link to={link} className={`no-underline ${className} ${color} f6`}>
            {text}
            <div>{children}</div>
        </Link>
    );
};
