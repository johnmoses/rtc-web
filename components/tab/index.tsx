import React, { FC } from 'react';
import './tab.module.scss';

interface IProps {
  disabled?: boolean;
  onChange: (file: File) => void;
}

const Tab: FC<IProps> = ({ disabled, onChange }) => {
  return <div></div>;
};

export default Tab;
