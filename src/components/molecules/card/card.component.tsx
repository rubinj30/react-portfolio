import React, { ReactNode } from 'react';
// import { Link } from 'react-router-dom';
import './card.css';

type Props = {
    title: string;
    className?: string;
    children?: ReactNode;
};

export const Card = ({ title, className, children }: Props) => {
    return (
        <div className={`ma3 pa3 card ${className}`}>
            <div className="f4 pv2">{title}</div>
            {children}
            {/* <Link to={'http://jackblackblackjack.netlify.com'}>
                image will go here and will be link
            </Link> */}
        </div>
    );
};
