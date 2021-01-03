import { FC, useEffect, useState } from 'react';
import connect4 from '../../../images/connect4-2.png';
import jb_card from '../../../images/JB_card.jpg';
import polaroid from '../../../images/polaroid2.png';
import stocks from '../../../images/stocks.png';
import react_portfolio from '../../../images/react-portfolio.png';
import { ProjectCard, ProjectType } from '../../molecules/project-card/project-card.component';
import axios from 'axios';
import './project-cards.css';

export const ProjectCards: FC<{ name?: string }> = (props) => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  // TODO: clear if not needed
  // useEffect(() => {
  // now getting these from github apis
  // getProjects();
  // }, []);
  // const getProjects = async () => {
  //   const { data } = await axios.get('/api/projects');
  //   setProjects(data);
  // };

  // TODO: use this on projects page. Eventually this will pull from DB.
  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap justify-center'>
        {seedProjects?.map((project) => {
          const { name, link, github, image, description } = project;
          return <ProjectCard name={name} link={link} github={github} image={image} description={description} />;
        })}
      </div>
    </div>
  );
};

const seedProjects = [
  {
    name: 'StockUp Investment Tracker',
    link: 'https://stock-up-app.herokuapp.com/',
    github: 'https://github.com/rubinj30/investment_app_mern',
    image: {
      name: stocks,
      style: 'phoneTop',
    },
    description:
      'This was my attempt to make an app on which people could easily track the performance of their investments.\
                Most investment applications provide a lot of information and you can trade securities from it. \
                But the user-interfaces are usually horrible and typically people are just checking the performance\
                of their stocks, or for any news related to them. Also, it gave me the opportunity to work with a lot of data and\
                external APIs.',
  },
  {
    name: 'Connect 4',
    link: 'https://connect-4-ts.herokuapp.com/',
    github: 'https://github.com/rubinj30/connect4',
    image: {
      name: connect4,
      style: 'br1',
    },
    description:
      'This Connect 4 allows for 2 players to play each other, or one player to play against the "Computer". This "Computer" is a formiddable opponent and can definitely beat you. There is also a score-tracking feature that is close to being finished, but I have some fine-tuning to do. The last "feature" is that you can select the size of board, and the win-checking will still work.',
  },
  {
    name: 'Portfolio',
    link: 'www.j-rubin.com',
    github: 'https://github.com/rubinj30/react-portfolio',
    image: {
      name: react_portfolio,
      style: 'phoneTop',
    },
    description:
      'I wanted to keep the style simple, have it stand out, but also be able to use as a playground for testing out and showing off new tools and features. I plan on adding Apollo Client to fetch data from GraphQL resolvers (projects being the data), tests with Jest and Kent C. Dodds new "react-testing-library", and more.',
  },
  {
    name: 'Partner-in-climb',
    link: 'http://partner-in-climb.herokuapp.com/',
    github: 'https://github.com/rubinj30/partner-in-climb',
    image: {
      name: polaroid,
      style: 'br1',
    },
    description:
      'This was designed to help rock climbers find climbing partners. It was my first time using Express.js, I learned the basics of how website routing works, and it has full CRUD for on 3 nested data models. I used handlebars.js as the templating framework for the front-end. I also learned the basics of how website routing works.',
  },
  {
    name: 'Jack Black BlackJack',
    link: 'https://jackblackblackjack.netlify.com/',
    github: 'https://github.com/rubinj30/Blackjack',
    image: {
      name: jb_card,
      style: 'br3',
    },
    description:
      'This was the first web app I ever built. It is a fully-functioning version of Blackjack, complete with betting. I made it with jQuery.',
  },
];
