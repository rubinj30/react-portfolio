import React, { FC } from 'react';
import { FullName } from '../../atoms/name/name.component';
import Picture from '../../../images/JonathanRubin.jpg';
import { Card } from '../../molecules/card/card.component';
import { Title } from '../../atoms/title/title.component';
import './about.css';

const BIO = 'I am a full-stack developer based in Atlanta, GA';

export const About: FC = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-column justify-center items-center w-90 w-70-l'>
        <FullName type='page' className='pt4 pb3' />
        <div className='pb4 flex flex-column items-start flex-row-ns items-center items-start-ns justify-center-ns'>
          <Card className='profilePic'>
            <img src={Picture} alt='Portrait' />
          </Card>
          <div className='w-90 w-60-ns mv4-ns'>
            <Title className='mv0' text='About Me' />
            <p className='lh-copy'>{BIO}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
