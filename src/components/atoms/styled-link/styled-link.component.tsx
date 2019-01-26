import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './styled-link.css';

type Props = {
    link: string;
    text?: string;
    hoverUnderline: boolean;
    color?: Color;
    children?: ReactNode;
    history?: any;
    handleClick?: any;
    className?: string;
};

type Color = 'black' | 'white';

export const StyledLink = ({
    link,
    text,
    hoverUnderline,
    color,
    children,
    handleClick,
    history,
    className
}: Props) => {
    let style: any = '';
    style =+ hoverUnderline ? 'underline-hover' : '';
    console.log('history', history);
    if (link && link.startsWith('/')) {
        console.log('used LINK')
        return (
            <Link
                to={link}
                className={`no-underline ${className} ${style} ${color} f6`}
                onClick={handleClick}
            >
                {text}
                <div className="flex flex-row justify-between">{children}</div>
            </Link>
        );
    } else {
        return (
            <a
                href={link}
                className={`no-underline ${className} ${color} f6`}
                onClick={handleClick}
            >
                {text}
                <div>{children}</div>
            </a>
        );
    }
};
