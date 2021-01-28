import React from 'react';

type BeforeUnloadProps = {
  shouldUnloadPeacefully: boolean;
};

/***********************
 * @useBeforeUnload this is a hook library used for tracking window exit. use it by putting it inside your functional component at the top level before your custom codes. Please don't put it inside a useEffect again to avoid performance issue.
 * required props: you need to pass in a @boolean value that will be evaluated and if truth it will exit without popup and if false it will throw a browser exit message.
 * Note: i didn't give you the priviledge to pass in a custom message because its redundant and every browser handles their own exit message for pReasons known to the browser engineers.
 * usecase: useBeforeUnload(!textChanged?true:false);
 ***********************/
export const useBeforeUnload: React.FC<BeforeUnloadProps> = ({shouldUnloadPeacefully}): null => {
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

/*********************
 * @BeforeUnload: this is for class users, same logic applies as above.
 * usecase: call it right after or before your lifecycles but i suggest right after your life cycles because this is basically consuming lifecyles & can be seen as custom life cycle
 * inoke like this: BeforeUnload(!textChanged?true:false);
 *********************/
export const BeforeUnload = (shouldUnloadPeacefully: boolean) =>
  class BeforeUnloadC extends React.Component {
    beforeUnloadHandler = (ev: BeforeUnloadEvent) => {
      if (shouldUnloadPeacefully) {
        delete ev.returnValue;
      } else {
        ev.returnValue = 'Your unsaved data will be lost.';
      }
    };

    componentDidMount() {
      window.addEventListener('beforeunload', this.beforeUnloadHandler);
    }

    componentWillUnmount() {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    }
  };

export default useBeforeUnload;
