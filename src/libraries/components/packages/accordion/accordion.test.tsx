import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Accordion} from './accordion.lib';

describe('<Accordion/>', () => {
  const renderAccordion = () => {
    const {rerender} = render(
      <Accordion
        accordionTitle="Pages"
        children={
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        }
      />
    );

    return rerender;
  };
  test('should render <Accordion/>', () => {
    renderAccordion();
  });

  test('should dropdown items', () => {
    renderAccordion();
    userEvent.click(screen.getByTestId('accordionController'));
    expect(screen.getAllByRole('listitem')[0]).toHaveTextContent(/(Home) || (About) || (Contact)/gim);
  });
});
