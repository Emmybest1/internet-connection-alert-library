import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Combobox} from './combobox.lib';
import {IComboboxItem} from '../../../../react-app-env';

describe('<Combobox/>', () => {
  const renderCombobox = () => {
    const PROGRAMMING_LANGUAGES = [
      {id: 'xx001', name: 'javascript', value: 'JavaScript'},
      {id: 'xx002', name: 'java', value: 'Java'},
    ];
    const {rerender} = render(
      <Combobox
        itemType="Programming Languages"
        items={PROGRAMMING_LANGUAGES}
        itemClickHandler={(item: IComboboxItem, searchedKeyword: string) => {}}
      />
    );

    return rerender;
  };

  test('should render <Combobox/>', () => {
    renderCombobox();
  });

  test('should find role combobox', () => {
    renderCombobox();

    expect(screen.getByRole('combobox')).toBeDefined();
  });

  test('should search item', () => {
    renderCombobox();

    userEvent.type(screen.getByTestId(/searchInput/i), 'Java');

    expect(screen.getByText('Java')).toBeDefined();
  });

  test('should dropdown down all items', () => {
    renderCombobox();

    userEvent.click(screen.getByTestId('itemsDropper'));

    expect(screen.getByText('JavaScript')).toBeDefined();
    userEvent.click(screen.getByText('JavaScript'));
  });
});
