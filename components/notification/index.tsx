import React, { FC } from 'react';
import './notification.module.scss';

interface IProps {
  disabled?: boolean;
  onChange: (file: File) => void;
}

const Notification: FC<IProps> = ({ disabled, onChange }) => {
  return <div></div>;
};

export default Notification;
