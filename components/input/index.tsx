import React, { ChangeEvent, FC, FormEvent, memo, RefObject } from 'react';
import './input.module.scss';

interface IProps {
  name?: string;
  ref?: RefObject<HTMLInputElement>;
  id?: string;
  value?: string;
  label?: string;
  error?: string;
  success?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoCapitalize?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  rows?: number;
  inputMode?:
    | 'text'
    | 'none'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: FormEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({
  ref,
  id,
  value,
  label,
  error,
  success,
  disabled,
  readOnly,
  placeholder,
  autoComplete,
  maxLength,
  inputMode,
  onChange,
  onInput,
  onKeyPress,
  onKeyDown,
  onBlur,
  onPaste,
}) => {
  const labelText = error || success || label;
  return (
    <div className="Input">
      <input
        ref={ref}
        className="form-control"
        type="text"
        id={id}
        dir="auto"
        value={value || ''}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        inputMode={inputMode}
        onChange={onChange}
        onInput={onInput}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onPaste={onPaste}
      />
      {labelText && <label htmlFor={id}>{labelText}</label>}
    </div>
  );
};

export default memo(Input);
