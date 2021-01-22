import React from 'react';
import {useHistory} from 'react-router-dom';
import {IBaseComponentsProps} from '../../../react-app-env';
import {Button} from '../../partials/button/button.component';
import './fallback-engine.style.scss';

interface IFallBackEngineProps extends IBaseComponentsProps {
  heading?: JSX.Element;
  textToDisplay: string;
  btnText: string;
  fallBackPath: string;
}

export const FallBackEngine: React.FC<IFallBackEngineProps> = ({
  heading,
  textToDisplay,
  fallBackPath,
  btnText,
  btnBgColor,
  btnTxtColor,
  bgColor,
  txtColor,
}): JSX.Element => {
  const history = useHistory();

  return (
    <main
      style={{
        backgroundColor: bgColor,
        color: txtColor,
      }}
      className="fallback-main"
    >
      <img src={`${process.env.PUBLIC_URL}/assets/images/error.png`} alt="" />
      {heading && heading}

      <p>{textToDisplay}</p>
      <Button
        buttonText={btnText}
        buttonTxtColor={btnTxtColor}
        buttonBgColor={btnBgColor}
        onClick={() => history.push(fallBackPath)}
      />
    </main>
  );
};

export default FallBackEngine;
//image ref:https://
