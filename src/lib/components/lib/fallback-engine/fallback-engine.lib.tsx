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
