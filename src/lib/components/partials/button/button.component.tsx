import React from 'react';
import './button.style.scss';

enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

enum ButtonClassName {
  danger = 'danger',
  warning = 'warning',
  success = 'success',
}

type ButtonProps = {
  buttonText: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  buttonType?: ButtonTypes.button | ButtonTypes.submit | ButtonTypes.reset;
  buttonDisable?: boolean;
  buttonImgSrc?: string;
  buttonImgAlt?: string;
  className?: ButtonClassName.danger | ButtonClassName.warning | ButtonClassName.success;
  fontFamily?: string;
  OnPassiveConfirm?: boolean;
  toolTip?: boolean;
  toolTipHint?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonBackgroundColor,
  buttonTextColor,
  buttonType,
  buttonDisable,
  buttonImgSrc,
  buttonImgAlt,
  className,
  fontFamily,
  toolTip,
  toolTipHint,
  OnPassiveConfirm,
  onClick,
}): JSX.Element => {
  return (
    <>
      {toolTip && <span className="btn-tooltip">{toolTipHint}</span>}
      <button
        type={buttonType ? buttonType : 'button'}
        disabled={buttonDisable ? true : false}
        style={{backgroundColor: buttonBackgroundColor, color: buttonTextColor, fontFamily}}
        className={`react-ui-button ${className}`}
        onClick={onClick}
      >
        {buttonImgSrc && (
          <span>
            <img src={buttonImgSrc} alt={buttonImgAlt ? buttonImgAlt : ''} />
          </span>
        )}
        {buttonText}
      </button>
    </>
  );
};

export default Button;