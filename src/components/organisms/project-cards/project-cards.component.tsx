import React from 'react';
import { Card } from '../../molecules/card/card.component';
import './project-cards.css';

export const ProjectCard = ({ title, link, github }) => {
    return (
        <Card title={title} className="projectCard">
            <img src={'http:'} />
            <div className="w4 flex justify-around">
                <a href={link}>Site</a>
                <a href={github}>GitHub</a>
            </div>
        </Card>
    );
};

export const ProjectCards = () => {
    return (
        <div className="flex flex-wrap">
            {projects.map((project, i) => {
                return (
                    <ProjectCard
                        key={i}
                        title={project.title}
                        link={project.link}
                        github={project.github}
                    />
                );
            })}
        </div>
    );
};

const projects = [
    {
        title: 'Connect 4 (1v1 or 1vComputer)',
        link: 'https://connect-4-ts.herokuapp.com/',
        github: 'https://github.com/rubinj30/connect4'
    },
    {
        title: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack'
    },
    {
        title: 'Programming Hangman',
        link: 'https://programming-hangman.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack'
    }
];
