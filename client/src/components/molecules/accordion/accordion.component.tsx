import React, { FC, useState } from 'react';
import './accordion.css';

type Props = {
  title: string;
  children?: any;
};

export const Accordion: FC<Props> = (props) => {
  const [selected, setSelected] = useState<boolean>();

  const toggle = (e: React.MouseEvent<any>) => {
    if (selected) {
      console.log('selected');
    } else {
      console.log('not selected');
    }
  };

  const { title } = props;
  return props.children(toggle, selected, title);
}

export const ProjectAccordion = () => {
  return (
    <Accordion title={'Projects'}>
      {({ toggle, selected, title }) => {
        return (
          <div className={`accordion`}>
            <div>{title} Title</div>
            <div>test</div> <div>test</div>
            <AccordionSection image={'https://www.placecage.com/200/300'} title={'Blackjack'} selected={selected} />
            <AccordionSection image={'https://www.placecage.com/200/300'} title={'Blackjack'} selected={selected} />
          </div>
        );
      }}
    </Accordion>
  );
};

type SectionProps = {
  selected: string;
  title: string;
  image: string;
  className?: string;
};

export const AccordionSection = ({ selected, title }: SectionProps) => {
  return (
    <div className='ba b--gray'>
      <div>{title}</div>
      <div>section content goes right here</div>
    </div>
  );
};
