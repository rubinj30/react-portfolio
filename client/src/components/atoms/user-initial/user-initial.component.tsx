import React from 'react';
import './user-initial.css';

type Props = {
    letter: string;
    size: Size;
};

type Size = 'small' | 'large';

export const UserInitial = ({ letter, size }: Props) => {
    return (
        <div
            className={`initial f3 flex justify-center items-center white br-100 ${size}`}
        >
            {letter}
        </div>
    );
};
