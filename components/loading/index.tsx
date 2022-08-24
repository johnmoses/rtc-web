import React, { FC, memo } from 'react';
import './loading.module.scss';
import { Spinner } from '../spinner';

interface IProps {
  color?: 'blue' | 'white' | 'black';
}

const Loading: FC<IProps> = ({ color = 'blue' }) => {
  return (
    <div className="Loading">
      <Spinner color={color} withBackground={color == 'white'} />
    </div>
  );
};

export default memo(Loading);
