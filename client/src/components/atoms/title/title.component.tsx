import React from 'react';
import './title.css';

type Props = {
    className?: string;
    text: string;
};
export const Title = ({ className, text }: Props) => (
    <div className={`fw5 f4 ${className}`}>{text}</div>
);
