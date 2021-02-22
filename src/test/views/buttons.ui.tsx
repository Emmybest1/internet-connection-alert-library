import React from 'react';
import {Button, ButtonClassName} from '../../lib/components/partials/button/button.component';

export const Buttons: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="btns-container">
        <Button buttonText="Danger" className={ButtonClassName.danger} />
        <Button buttonText="Warning" className={ButtonClassName.warning} />
        <Button buttonText="Success" className={ButtonClassName.success} />
      </div>
    </main>
  );
};

export default Buttons;
