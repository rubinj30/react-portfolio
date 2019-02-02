import React, { ReactNode } from 'react';
import './card.css';

type Props = {
    title?: string;
    className?: string;
    children?: ReactNode;
};

export const Card = ({ title, className, children }: Props) => {
    return (
        <div className={`ma3 pa3 card ${className}`}>
            {title && <div className="b f4 pv3 tc">{title}</div>}
            {children}
        </div>
    );
};
