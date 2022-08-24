import React, { FC } from 'react';

interface SimpleSelectProps {
  data: Array<any>;
}

interface CategorySelectProps {
  options: JSX.Element;
}

interface IProps {
  disabled?: boolean;
  onChange: (file: File) => void;
}

export const Select: FC<IProps> = ({ disabled, onChange }) => {
  return <div></div>;
};
