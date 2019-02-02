import React from 'react';
import { Card } from '../../molecules/card/card.component';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import { Button } from '../../atoms/button/button.component';
import jb_card from '../../../images/JB_card.jpg';
import polaroid from '../../../images/polaroid2.png';
import connect4 from '../../../images/connect4.png';
import './project-cards.css';

export const ProjectCard = ({ title, link, github, image, description }) => {
    return (
        <Card title={title}>
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

export const ProjectCards = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap justify-center">
                {projects.map((project, i) => {
                    return (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            link={project.link}
                            github={project.github}
                            image={project.image}
                            description={project.description}
                        />
                    );
                })}
            </div>
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
        },
        description:
            'This was my attempt to make an app on which I could easily track the performance of my investments.\
            Most investment applications provide a lot of information and you can trade securities from it. \
            But the user-interfaces are usually horrible and typically people are just checking the performance of their stocks, or for any news related to them.\
            '
    },
    {
        title: 'Connect 4',
        link: 'https://connect-4-ts.herokuapp.com/',
        github: 'https://github.com/rubinj30/connect4',
        image: {
            name: connect4,
            style: 'br1'
        },
        description: ''
    },
    {
        title: 'Partner-in-climb',
        link: 'http://partner-in-climb.herokuapp.com/',
        github: 'https://github.com/rubinj30/partner-in-climb',
        image: {
            name: polaroid,
            style: 'br1'
        },
        description:
            'This was designed to help rock climbers find climbing partners. It was my first time using ExpressP and having full CRUD for on 3 nested data models. I also learned the basics of how website routing works.'
    },
    {
        title: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack',
        image: {
            name: jb_card,
            style: 'br1'
        },
        description:
            'This was the first web app I ever built. It is a fully-functioning version of Blackjack, complete with betting.'
    }
];
