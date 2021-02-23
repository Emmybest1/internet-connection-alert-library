import React from 'react';
import {Button, ButtonClassName, ButtionStructures} from '../../lib/components/partials/button/button.component';

export const Buttons: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="btns-container">
        <Button buttonText="Danger" className={ButtonClassName.danger} buttonStructure={ButtionStructures.border} />
        <Button buttonText="Warning" className={ButtonClassName.warning} buttonStructure={ButtionStructures.curved} />
        <Button
          buttonText="Curved Border"
          className={ButtonClassName.success}
          buttonStructure={ButtionStructures.curvedBorder}
        />
        <Button buttonText="Success" className={ButtonClassName.success} buttonDisable={true} />
      </div>
    </main>
  );
};

export default Buttons;
