import {MutableRefObject, useEffect, useRef} from 'react';

type TUseLocalStorageProps = {
  key: string;
  value: any;
  invoker?: any;
};

export const useLocalstorage = ({key, value, invoker}: TUseLocalStorageProps) => {
  let isMounted: MutableRefObject<null | boolean> = useRef<null | boolean>(null);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted) {
      switch (value) {
        case typeof value !== 'object':
          window.localStorage.setItem(key, value);
          break;

        case typeof value === 'object' && !Array.isArray(value):
          window.localStorage.setItem(key, JSON.stringify(value));
          break;

        default:
          window.localStorage.setItem(key, value);
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, [invoker ?? undefined]);
};
