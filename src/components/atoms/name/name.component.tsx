import React from 'react';

export const Name = () => {
    return (
        <div className="f1 pa3">
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
