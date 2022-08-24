import React, { FC } from 'react';
import './spinner.module.scss';

export const Spinner: FC<{
  color?: 'blue' | 'white' | 'black';
  withBackground?: boolean;
}> = ({ color = 'blue', withBackground }) => {
  return (
    <div className="Spinner">
      <div />
    </div>
  );
};
