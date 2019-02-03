import React from 'react';

type Props = {
    className?: string;
    placeholder?: string;
    value?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const Input = ({
    className,
    placeholder,
    value,
    handleChange,
    handleKeyUp
}: Props) => {
    return (
        <div className={`${className}`}>
            <input
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
};
