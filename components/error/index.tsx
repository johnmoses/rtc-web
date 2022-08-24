import React, { FC, memo } from 'react';

interface IProps {
  color?: 'blue' | 'white' | 'black';
}

const Error: FC<IProps> = ({ color = 'blue' }) => {
  return <div color={color}>Content not available</div>;
};

export default Error;
