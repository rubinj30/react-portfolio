import React from 'react';

export const Letter = ({ color, text }) => (
    <span className={color}>{text}</span>
);

type Type = 'main' | 'page' | 'header';

export const Name = ({ text, type, className }: { text: string; type?: Type, className?: string }) => {
    const colors = ['blue', 'red', 'yellow', 'blue', 'green', 'red', 'blue', 'red', 'yellow', 'blue', 'green']
    const fontType = type === 'main' ? 'f1' : type === 'page' ? 'f2 f1-ns' : 'f3';
    console.log(fontType);

    return (
        <div className={`${fontType} ${className} pa2`}>
            {text.split('').map((letter, i) => (
                <Letter text={letter} color={colors[i]} />
            ))}</div>
    )
}

export const FullName = ({ type, className }: { type: Type, className?: string }) => (
    <div className={`flex flex-wrap justify-center ${className}`}>
        <Name text="Jonathan" type={type} />
        <Name text="Rubin" type={type} />
    </div>
);
