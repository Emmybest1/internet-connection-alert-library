import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import {Button, ButtonProps, ButtonClassName} from './button.component';

export default {
  title: 'Partials/Form/Button',
  component: Button,
};

// const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

// export const SuccessButton = ButtonTemplate.bind({});
// export const SuccessDanger = () => (
//   <Button buttonText="Danger" className={ButtonClassName.danger} onClick={() => console.log('Clicked')} />
// );

// SuccessButton.args = {
//   buttonText: 'Success',
//   className: ButtonClassName.success,
//   onClick: () => console.log('Testing'),
// };
