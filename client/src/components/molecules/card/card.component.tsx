import { ReactNode } from 'react';
import './card.css';

type Props = {
  title?: string;
  className?: string;
  children?: ReactNode;
};

export const Card = ({ title, className, children }: Props) => {
  return (
    <div className={`card ${className}`}>
      {title && <div className='card-title'>{title}</div>}
      {children}
    </div>
  );
};
