import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './react-portal.style.scss';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

type ReactPortalProps = {
  children: JSX.Element;
};

export const ReactPortal: React.FC<ReactPortalProps> = ({children}): JSX.Element => {
  const divContainer = window.document.createElement('div');
  divContainer.setAttribute('class', 'modal-container');

  useEffect(() => {
    /**********
     * immediately the component mount append @divContainer as the childNode of @modalRoot in the DOM
     **********/
    modalRoot!.appendChild(divContainer);

    return () => {
      modalRoot!.removeChild(divContainer);
    };
  });

  /************
   * return the createPortal api that takes the children(JSX) and inject it into @divContainer which is already a childNode of @modalRoot
   ************/
  return <>{ReactDOM.createPortal(children, divContainer)}</>;
};

export default ReactPortal;
