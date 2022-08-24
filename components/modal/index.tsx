import React, { FC, RefObject, useRef } from 'react';
import Portal from '../portal';
import './modal.module.scss';
import { Button } from '../button';

interface IProps {
  title?: string;
  className?: string;
  isOpen?: boolean;
  header?: any;
  hasCloseButton?: boolean;
  hasBackdrop?: boolean;
  dialogRef?: RefObject<HTMLDivElement>;
  children: any;
  onClose: () => void;
  onEnter?: () => void;
}

const Modal: FC<IProps> = ({
  title,
  className,
  isOpen,
  header,
  hasCloseButton,
  hasBackdrop,
  dialogRef,
  children,
  onClose,
  onEnter,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  function showHeader() {
    if (header) {
      return header;
    }

    if (!title) {
      return undefined;
    }

    return (
      <div className="modal-header">
        {hasCloseButton && (
          <Button size="smaller" onClick={onClose}>
            <i className="icon-close" />
          </Button>
        )}
        <div className="modal-title">{title}</div>
      </div>
    );
  }

  return isOpen ? (
    <Portal>
      <div
        ref={modalRef}
        className={`Modal ${className} ${hasBackdrop} ${onEnter}`}
        tabIndex={-1}
        role="dialog">
        <div className="modal-container">
          <div className="modal-backdrop" onClick={onClose} />
          <div className="modal-dialog" ref={dialogRef}>
            {showHeader()}
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
