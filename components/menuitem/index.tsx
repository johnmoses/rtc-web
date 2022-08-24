import React, { FC, useCallback } from 'react';
import './meunitem.module.scss';

type OnClickHandler = (
  e: React.SyntheticEvent<HTMLDivElement | HTMLAnchorElement>,
) => void;

type IProps = {
  className?: string;
  icon?: string;
  arialLabel?: string;
  href?: string;
  disabled?: boolean;
  children: any;
  onClick?: OnClickHandler;
};

const MenuItem: FC<IProps> = props => {
  const { className, icon, arialLabel, href, disabled, children, onClick } =
    props;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.keyCode !== 13 && e.keyCode !== 32) {
        return;
      }

      if (disabled || !onClick) {
        e.stopPropagation();
        e.preventDefault();

        return;
      }

      onClick(e);
    },
    [disabled, onClick],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !onClick) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }

      onClick(e);
    },
    [disabled, onClick],
  );

  const content = (
    <>
      {icon && (
        <i
          className={`icon-${icon}`}
          data-char={
            icon.startsWith('char-') ? icon.replace('char-', '') : undefined
          }
        />
      )}
      {children}
    </>
  );

  return (
    <div
      role="button"
      tabIndex={0}
      className={`MenuItem ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={arialLabel}
      title={arialLabel}>
      {content}
    </div>
  );
};

export default MenuItem;
