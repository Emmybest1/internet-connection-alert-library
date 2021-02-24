/******************************************************************************************************************************************
 * @docs this util is different from useLocalStorage because its built to be used in action e.g button click and not
 *  as a hook where its self invoked.
 * @useCase use it when you are trying to save to localStorage by action or when you want to save to localStorage in a function block.
 * And also use the get method when you are tring to retrieve data from localStorage.
 * @Note the get method handles stringified data already
 * @Future_Update note i used a function and not an object literal, thats because i am thinking of building a util that will simultaneosly
 * save data to localStorage and give use the
 * ability to pass in the key,vand their state name whihc they want the saved data to be stored to and this util will simultaneously save to
 * localStorage and if user gave the permission to refill their state, then we will refill their state automatically.
 *******************************************************************************************************************************************/

import {type} from 'os';

const localStorage = (key?: string, stateDispatcher?: Function | ((newVal: any) => {})) => ({
  set(key: string, value: any): void {
    switch (true) {
      case typeof value !== 'object':
        window.localStorage.setItem(key, value);
        break;

      case typeof value === 'object' && !Array.isArray(value):
        window.localStorage.setItem(key, JSON.stringify(value));
    }
  },

  get(key: string): any {
    const value = window.localStorage.getItem(key);

    if (value === undefined) {
      window.alert(`Sorry no data with ${key} identifier.`);
    } else {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        return JSON.parse(value);
      } else {
        return value;
      }
    }
  },
  updateState(): void {
    if (!!stateDispatcher) {
      const value = window.localStorage.getItem(key || '');
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        try {
          stateDispatcher(JSON.parse(value));
        } catch (e) {
          stateDispatcher(value);
        }
      } else {
        stateDispatcher(value);
      }
      return;
    }
  },
});

export const _localStorage = localStorage();
/****************************************************************************
 * @useCase then ones the updateState util is done, this will be its useCase
 * _localStorage("name",setName)
 ****************************************************************************/
