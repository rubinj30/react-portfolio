import React from 'react';
import { FullName } from '../../atoms/name/name.component';
import Picture from '../../../images/JonathanRubin.jpg';
import { Card } from '../../molecules/card/card.component';
import './about.css';

export const About = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-column justify-center items-center w-90 w-70-l">
                <FullName />
                <div className="pb4">
                    <Card className="profilePic">
                        <img src={Picture} alt={'Photo of Jonathan Rubin'} />
                    </Card>
                    <h3 className="mv0">About Me</h3>
                    <p>
                        I am a full-stack developer based in Atlanta, GA. I work
                        at Supply.com rebuilding the front-end of the e-commerce
                        website with React, Typescript, GraphQL/Apollo, and
                        Jest/Enzyme.
                    </p>
                    <p>
                        In my free time, I like to rock climb around the
                        Southeast, eat chicken wings around Atlanta, and of
                        course write code.
                    </p>
                    <h4>My story</h4>
                    <p>
                        I have a background in data analytics and after dealing
                        with Excel constantly getting slowed down by the larger
                        datasets I was working with, I discovered Python. The
                        more I worked in Python, the more I found myself using
                        it for automating processes. I started spending my
                        weekends coding and working on self-directed side
                        projects for work. At first it was things I was
                        previously doing with macros, formulas or manually, but
                        soon I was looping through API calls to fetch additional
                        information about prospective customers for our sales
                        team and setting up our daily reports to be pulled and
                        sent out automatically.
                    </p>
                    <p>
                        Eventually, I decided I had to pursue this new-found
                        passion and change careers. After much consideration, I
                        decided to attend a 3-month web development bootcamp to
                        accelerate my learning and broaden my scope of
                        knowledge. On top of learning to build full-stack
                        applications, I had the opportunity to collaborate with
                        like-minded individuals and build a network of other
                        developers.
                    </p>
                    <p>
                        Shortly after the course ended, I took a position at an
                        e-commerce company that was completely rebuilding their
                        platform and front-end using cutting-edge technologies.
                        It has been amazing to work with and learn from other
                        programmers and build something together.
                    </p>
                </div>
            </div>
        </div>
    );
};
