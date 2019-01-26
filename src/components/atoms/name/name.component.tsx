import React from 'react';

export const First = ({ className }: { className?: string }) => {
    return (
        <div className={`f1 pa2 pt ${className}`}>
            <Letter text={'J'} color={'blue'} />
            <Letter text={'o'} color={'red'} />
            <Letter text={'n'} color={'green'} />
            <Letter text={'a'} color={'blue'} />
            <Letter text={'t'} color={'yellow'} />
            <Letter text={'h'} color={'red'} />
            <Letter text={'a'} color={'blue'} />
            <Letter text={'n'} color={'green'} />
        </div>
    );
};

export const Letter = ({ color, text }) => (
    <span className={color}>{text}</span>
);

export const Last = ({ className }: { className?: string }) => {
    return (
        <div className={`f1 pa2 pt ${className}`}>
            <Letter text={'R'} color={'blue'} />
            <Letter text={'u'} color={'red'} />
            <Letter text={'b'} color={'green'} />
            <Letter text={'i'} color={'blue'} />
            <Letter text={'n'} color={'yellow'} />
        </div>
    );
};
