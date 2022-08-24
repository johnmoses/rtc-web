import React, { ChangeEvent, FC, memo } from 'react';
import './Checkbox.scss';

interface IProps {
  id?: string;
  name?: string;
  value?: string;
  label: string;
  subLabel?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onCheck?: (isChecked: boolean) => void;
}

const Checkbox: FC<IProps> = ({
  id,
  name,
  value,
  label,
  subLabel,
  checked,
  disabled,
  onChange,
  onCheck,
}) => {
  return (
    <label>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
      />
      <div></div>
    </label>
  );
};

export default memo(Checkbox);
