import React from 'react';
import { Card } from '../../molecules/card/card.component';
import jb_card from '../../../images/JB_card.jpg';
import polaroid from '../../../images/polaroid2.png';
import connect4 from '../../../images/connect4.png';
import './project-cards.css';

export const ProjectCard = ({ title, link, github, image }) => {
    return (
        <Card title={title}>
            <img
                className={`w-50 mb2 cardImg ${image.style}`}
                src={image.name}
            />
            <div className="mv2 flex justify-around">
                <a href={link} className="no-underline hover-underline w-45">
                    <button className="w-100">Check Out App</button>
                </a>
                <a href={github} className="no-underline hover-underline w-45">
                    <button className="w-100">See GitHub Repo</button>
                </a>
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
                        image={project.image}
                    />
                );
            })}
        </div>
    );
};

const projects = [
    {
        title: 'StockUp Investment Tracker',
        link: 'https://stock-up-app.herokuapp.com/',
        github: 'https://github.com/rubinj30/investment_app_mern',
        image: {
            name: connect4,
            style: 'br1'
        }
    },
    {
        title: 'Connect 4',
        link: 'https://connect-4-ts.herokuapp.com/',
        github: 'https://github.com/rubinj30/connect4',
        image: {
            name: connect4,
            style: 'br1'
        }
    },
    {
        title: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack',
        image: {
            name: jb_card,
            style: 'br2'
        }
    },
    {
        title: 'Partner-in-climb',
        link: 'http://partner-in-climb.herokuapp.com/',
        github: 'https://github.com/rubinj30/partner-in-climb',
        image: {
            name: polaroid,
            style: 'br1'
        }
    },
    {
        title: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack',
        image: {
            name: jb_card,
            style: 'br1'
        }
    },
    {
        title: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack',
        image: {
            name: jb_card,
            style: 'br1'
        }
    }
];
