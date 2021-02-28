import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Button, TButtonProps, ButtonClassName} from './button.component';
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

const ButtonTemplate: Story<TButtonProps> = (args: TButtonProps) => <Button {...args} />;

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
