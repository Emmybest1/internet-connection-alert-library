import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Button, ButtonProps, ButtonClassName} from './button.component';
import {storiesHierarchy as h} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/Button`,
  component: Button,
  argTypes: {
    buttonText: {control: 'text'},
    className: {control: 'text'},
    onClick: {action: 'clicked'},
  },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} style={{border: 'solid 3px #eee', borderRadius: '5px', cursor: 'pointer', padding: '8px 12px'}} />
);

export const SuccessButton = ButtonTemplate.bind({});
SuccessButton.args = {
  buttonText: 'Success',
  className: ButtonClassName.success,
};

export const DangerButton = ButtonTemplate.bind({});
DangerButton.args = {
  buttonText: 'Danger',
  className: ButtonClassName.danger,
};

export const WarningButton = ButtonTemplate.bind({});
WarningButton.args = {
  buttonText: 'Warning',
  className: ButtonClassName.warning,
};
