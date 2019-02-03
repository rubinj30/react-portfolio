import React from 'react';
import connect4 from '../../../images/connect4.png';
import jb_card from '../../../images/JB_card.jpg';
import polaroid from '../../../images/polaroid2.png';
import stocks from '../../../images/stocks.png';
import {
    ProjectCard,
    ProjectType
} from '../../molecules/project-card/project-card.component';
import axios from 'axios';
import './project-cards.css';

type Props = {
    name?: string;
};

type State = {
    projects: Array<ProjectType>;
};

export class ProjectCards extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects = async () => {
        const { data } = await axios.get('/api/projects');
        this.setState({ projects: data });
    };

    render() {
        // TODO: use this on projects page. Eventually going to fetch with Apollo query
        const { projects } = this.state;
        return (
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                    {seedProjects.map((project, i) => {
                        return (
                            project && (
                                <ProjectCard
                                    key={i}
                                    name={project.name}
                                    link={project.link}
                                    github={project.github}
                                    image={project.image}
                                    description={project.description}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        );
    }
}
const seedProjects = [
    {
        name: 'StockUp Investment Tracker',
        link: 'https://stock-up-app.herokuapp.com/',
        github: 'https://github.com/rubinj30/investment_app_mern',
        image: {
            name: stocks,
            style: 'phoneTop'
        },
        description:
            'This was my attempt to make an app on which people could easily track the performance of their investments.\
                Most investment applications provide a lot of information and you can trade securities from it. \
                But the user-interfaces are usually horrible and typically people are just checking the performance\
                of their stocks, or for any news related to them. Also, it gave me the opportunity to work with a lot of data and\
                external APIs.'
    },
    {
        name: 'Connect 4',
        link: 'https://connect-4-ts.herokuapp.com/',
        github: 'https://github.com/rubinj30/connect4',
        image: {
            name: connect4,
            style: 'br1'
        },
        description: ''
    },
    {
        name: 'Partner-in-climb',
        link: 'http://partner-in-climb.herokuapp.com/',
        github: 'https://github.com/rubinj30/partner-in-climb',
        image: {
            name: polaroid,
            style: 'br1'
        },
        description:
            'This was designed to help rock climbers find climbing partners. It was my first time using Express.js, I learned the basics of how website routing works, and it has full CRUD for on 3 nested data models. I used handlebars.js as the templating framework for the front-end. I also learned the basics of how website routing works.'
    },
    {
        name: 'Jack Black BlackJack',
        link: 'https://jackblackblackjack.netlify.com/',
        github: 'https://github.com/rubinj30/Blackjack',
        image: {
            name: jb_card,
            style: 'br3'
        },
        description:
            'This was the first web app I ever built. It is a fully-functioning version of Blackjack, complete with betting.'
    }
];
