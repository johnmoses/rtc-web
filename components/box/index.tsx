import React, { FC } from 'react';
import './Box.scss';

interface IProps {
  className?: string;
  children: any;
}

const Box: FC<IProps> = ({ className, children }) => {
  return <div className={'Anchor' + className}>{children}</div>;
};

export default Box;
