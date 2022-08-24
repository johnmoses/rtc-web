import React, {
  FC,
  MouseEvent as ReactMouseEvent,
  RefObject,
  useCallback,
  useRef,
  useState,
} from 'react';
import './button.module.scss';

export type OwnProps = {
  ref?: RefObject<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'button' | 'submit' | 'reset';
  children: any;
  size?: 'default' | 'smaller' | 'tiny';
  className?: string;
  disabled?: boolean;
  onClick?: (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Button: FC<OwnProps> = ({
  ref,
  type = 'button',
  children,
  size = 'default',
  className,
  disabled,
  onClick,
}) => {
  let elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  if (ref) {
    elementRef = ref;
  }

  // const [isclicked, setIsClicked] = useState(false);

  const handleClick = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!disabled && onClick) {
        onClick(e);
      }
      // setIsClicked(true);
    },
    [disabled, onClick],
  );

  return (
    <button
      ref={elementRef as RefObject<HTMLButtonElement>}
      type={type}
      className={`Button ${className} ${size}`}
      disabled={disabled}
      onClick={handleClick}>
      {children}
    </button>
  );
};
