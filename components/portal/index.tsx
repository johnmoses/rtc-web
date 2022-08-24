import React from 'react';
import { FC, useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  containerId?: string;
  className?: string;
  children: any;
}

const Portal: FC<IProps> = ({ containerId, className, children }) => {
  const elementRef = useRef<HTMLDivElement>();
  if (!elementRef.current) {
    elementRef.current = document.createElement('div');
  }

  useLayoutEffect(() => {
    const container = document.querySelector<HTMLDivElement>(
      containerId || '#portals',
    );
    if (!container) {
      return undefined;
    }

    const element = elementRef.current!;
    if (className) {
      element.classList.add(className);
    }

    container.appendChild(element);

    // const vElement = (
    //     <div>Come</div>
    // )
    // const virElement = React.createElement('b');

    return () => {
      // ReactDOM.render(undefined, element);
      container.removeChild(element);
    };
  }, [className, containerId]);

  return elementRef
    ? ReactDOM.createPortal(children, elementRef.current)
    : null;
};

export default Portal;
