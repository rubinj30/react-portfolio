import React from 'react';
import { StyledLink } from '../../atoms/styled-link/styled-link.component';
import './user-initial.css';

type Props = {
  letter: string;
  size: Size;
};

type Size = 'small' | 'large';

export const UserInitial = ({ letter, size }: Props) => {
  return (
    <StyledLink link='/'>
      <div className={`initial f3 flex justify-center items-center white br-100 ${size}`}>{letter}</div>
    </StyledLink>
  );
};
