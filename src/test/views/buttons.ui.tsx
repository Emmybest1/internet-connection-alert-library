import React from 'react';
import {Button, ButtonClassName} from '../../lib/components/partials/button/button.component';

const Buttons: React.FC = (): JSX.Element => {
  return (
    <div>
      <Button buttonText="Danger" />
    </div>
  );
};

export default Buttons;
