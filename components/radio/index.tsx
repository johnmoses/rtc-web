import React, { FC } from 'react';
import './radio.module.scss';

interface IProps {
  disabled?: boolean;
  onChange: (file: File) => void;
}

const Radio: FC<IProps> = ({ disabled, onChange }) => {
  return <div></div>;
};

export default Radio;
