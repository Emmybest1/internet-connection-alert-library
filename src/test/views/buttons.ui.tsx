import React from 'react';
import {Button, ButtonClassName} from '../../lib/components/partials/button/button.component';

export const Buttons: React.FC = (): JSX.Element => {
  return (
    <div className="btns-container">
      <Button buttonText="Danger" className={ButtonClassName.danger} />
      <Button buttonText="Warning" className={ButtonClassName.warning} />
      <Button buttonText="Success" className={ButtonClassName.success} />
    </div>
  );
};

export default Buttons;
