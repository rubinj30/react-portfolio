import React from 'react';
import './button.css'

// using standard HTML button types
type Type = 'submit' | 'reset' | 'button';

type Props = {
    className?: string;
    type?: Type;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    label?: string;
};
export const Button = ({
    label,
    className,
    type = 'button',
    onClick
}: Props) => {
    return (
        <button
            type={type}
            className={`pointer tc ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
