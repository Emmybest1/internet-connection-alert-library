import {_localStorage} from './localStorage.lib';

describe('Test for localStorage.lib.ts', () => {
  afterAll(() => {
    window.localStorage.clear();
  });
  test('should store and fetch primitive data successfully', () => {
    _localStorage.set('test', 'test test test');

    const getTest = _localStorage.get('test');

    expect(getTest).toBeDefined();
  });

  test('should store and fetch reference data successfully', () => {
    _localStorage.set('test2', {name: 'Emmanuel Onah', age: 21, occupation: 'Javascript Frontend Architect'});

    const getTest = _localStorage.get('test2');

    expect(getTest).toBeDefined();
  });

  test('should test for undefined value in localStorage and pass', () => {
    const undefinedValue = _localStorage.get('test3') ?? undefined;

    expect(undefinedValue).toBeUndefined();
  });
});
