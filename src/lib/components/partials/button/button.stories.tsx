import React from 'react';
import {Button, ButtonClassName} from './button.component';
import {storiesHierarchy as h} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/Button`,
  component: Button,
  argTypes: {onClick: {action: 'Clicked'}},
};
export const SuccessButton = () => <Button buttonText="Success" className={ButtonClassName.success} />;
export const DangerButton = () => <Button buttonText="Danger" className={ButtonClassName.danger} />;
