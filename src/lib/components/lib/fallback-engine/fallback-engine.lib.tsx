import React from 'react';
import {useHistory} from 'react-router-dom';
import {IBaseComponentsProps} from '../../../../types';
import {Button} from '../../partials/button/button.component';
import './fallback-engine.style.scss';

interface IFallBackEngineProps extends IBaseComponentsProps {
  heading?: JSX.Element;
  textToDisplay: string;
  buttonText: string;
  fallBackPath: string;
}

/*****************************************************************************************************************************************
 * @FallBackEngine : this component can be called when you need to fallback to a viewer that tells why the fallback happened
 * after then you can click a button to take you to a safe view
 * @userCase : <FallBackEngine textToDisplay="Sorry you are not authorized to access the view" buttonText="Go Home" fallBackPath="/home"/>
 * @reference : checkout the stories for more details
 *****************************************************************************************************************************************/

export const FallBackEngine: React.FC<IFallBackEngineProps> = ({
  heading,
  textToDisplay,
  fallBackPath,
  buttonText,
  backgroundColor,
  contentTextColor,
  buttonBackgroundColor,
  buttonTextColor,
}): JSX.Element => {
  const history = useHistory();

  return (
    <main
      style={{
        backgroundColor: backgroundColor,
        color: contentTextColor,
      }}
      className="fallback-main"
    >
      <img src={`${process.env.PUBLIC_URL}/assets/images/error.png`} alt="" />
      {heading && heading}

      <p>{textToDisplay}</p>
      <Button
        buttonText={buttonText}
        buttonTextColor={buttonTextColor}
        buttonBackgroundColor={buttonBackgroundColor}
        onClick={() => history.replace(fallBackPath)}
      />
    </main>
  );
};

export default FallBackEngine;
//image ref:https://
