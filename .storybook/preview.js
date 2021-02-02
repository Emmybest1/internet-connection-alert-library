import {addDecorator} from '@storybook/react';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};

addDecorator((Story) => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <Story />
  </div>
));
