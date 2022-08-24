import React, { FC } from 'react';
import './listitem.module.scss';

interface IProps {
  disabled?: boolean;
  onChange: (file: File) => void;
}

const ListItem: FC<IProps> = ({ disabled, onChange }) => {
  return <div></div>;
};

export default ListItem;
