import {renderHook, act} from '@testing-library/react-hooks';
import {useLocalStorage} from './use-localstorage.lib';
import {_localStorage} from '../../utils/local-storage/localStorage.lib';

const renderUserLocalStorage = (key: string = 'name', value: string | any = 'Emmanuel Onah') => {
  const {result} = renderHook(() => useLocalStorage({key, value}));
  return result;
};
describe('<useLocalStorage/>', () => {
  afterAll(() => {
    window.localStorage.clear();
  });
  test('should render <useLocalStorage/>', () => {
    renderUserLocalStorage();
    const name = _localStorage.get('name');
    expect(name).toContain('Emmanuel Onah');
    expect(name).not.toContain('Tester');

    //for reference type object
    act(() => {
      renderUserLocalStorage('occupation', {one: 'Frontend Architect', two: 'Javascript Content Creator'});
      const occupation = _localStorage.get('occupation');

      expect(occupation).toBeDefined();
    });
  });
});
