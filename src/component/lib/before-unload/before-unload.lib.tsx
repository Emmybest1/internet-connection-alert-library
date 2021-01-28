import React from 'react';

type BeforeUnloadProps = {
  shouldUnloadPeacefully: boolean;
};

const useBeforeUnload: React.FC<BeforeUnloadProps> = ({shouldUnloadPeacefully}): null => {
  React.useEffect(() => {
    let beforeunloadHandler: any;

    beforeunloadHandler = window.addEventListener('beforeunload', (ev: BeforeUnloadEvent): any | void => {
      if (shouldUnloadPeacefully) {
        delete ev.returnValue;
      } else {
        ev.returnValue = 'Your unsaved data will be lost.';
      }
    });

    return () => {
      window.removeEventListener('beforeunload', beforeunloadHandler);
    };
  });
  return null;
};

export default useBeforeUnload;
