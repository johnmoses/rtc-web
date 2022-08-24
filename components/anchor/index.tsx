import React, { FC } from 'react';
import './Anchor.scss';

interface IProps {
  className?: string;
  children: any;
}

const Anchor: FC<IProps> = ({ className, children }) => {
  return <div className={'Anchor' + className}>{children}</div>;
};

export default Anchor;
