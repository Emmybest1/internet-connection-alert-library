import {useEffect} from 'react';

type TUseLocalStorageProps = {
  key: string;
  value: any;
  invoker?: any;
};
export const useLocalstorage = ({key, value, invoker}: TUseLocalStorageProps) => {
  useEffect(() => {
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
  }, [invoker ?? undefined]);
};
