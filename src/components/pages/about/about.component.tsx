import React from 'react';
import { FullName } from '../../atoms/name/name.component';

export const About = () => {
    return (
        <div>
            <div className="flex flex-column justify-center items-center">
                <FullName />
            </div>
        </div>
    );
};
