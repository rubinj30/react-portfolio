import React from 'react';
import { Card } from '../../molecules/card/card.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { Button } from '../../atoms/button/button.component';

export type ProjectType = {
    name: string;
    link: string;
    github: string;
    image: {
        style: string;
        name: string;
    };
    description: string;
};

export const ProjectCard = ({
    name,
    link,
    github,
    image,
    description
}: ProjectType) => {
    return (
        <Card title={name}>
            <div className="flex flex-column items-center">
                <img
                    alt="example photo of project"
                    className={`w-90 h-100 mb2 cardImg ${image.style}`}
                    src={image.name}
                />
                <p className="pl3 f7 f6-ns">{description}</p>
            </div>
            <div className="mv2 flex justify-around">
                <StyledLink hoverUnderline={true} link={link} className="w-40">
                    <Button className="w-100 f7 f6-ns" label="Visit Website" />
                </StyledLink>
                <StyledLink
                    link={github}
                    hoverUnderline={true}
                    className="w-40"
                >
                    <Button className="w-100 f7 f6-ns" label="See GitHub" />
                </StyledLink>
            </div>
        </Card>
    );
};
