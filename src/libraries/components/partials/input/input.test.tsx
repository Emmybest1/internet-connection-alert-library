import React from 'react';
import {render, screen} from '@testing-library/react';
import {Input} from './input.component';

const renderInput = (id?: string = 'firstName', labelText?: string = 'First Name') => {
  const {rerender} = render(<Input id={id} labelText={labelText} placeholder="First Name" />);
  return rerender;
};
describe('<Input/>', () => {
  test('should render component with right form elements', () => {
    const rerender = renderInput();

    expect(screen.getByLabelText(/First Name/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/First Name/)).toBeDefined();

    rerender(<Input id="txtArea" labelText="Biography" placeholder="Biography" />);
    expect(screen.getByLabelText(/Biography/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Biography/)).toBeDefined();
  });
});
