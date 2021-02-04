import React from 'react';
import './button.style.scss';

enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export enum ButtonClassName {
  danger = 'danger',
  warning = 'warning',
  success = 'success',
}

export type ButtonProps = {
  buttonText: string;
  buttonType?: ButtonTypes.button | ButtonTypes.submit | ButtonTypes.reset;
  buttonDisable?: boolean;
  buttonIcon?: React.ReactElement;
  className?: ButtonClassName.danger | ButtonClassName.warning | ButtonClassName.success;
  toolTip?: boolean;
  toolTipHint?: string;
};

export const Button: React.FC<ButtonProps & any> = ({
  buttonText,
  buttonType,
  buttonDisable,
  buttonIcon,
  className,
  toolTip,
  toolTipHint,
  ...otherProps
}): JSX.Element => {
  return (
    <>
      {toolTip && <span className="btn-tooltip">{toolTipHint}</span>}
      <button
        type={buttonType ? buttonType : 'button'}
        disabled={buttonDisable ? true : false}
        className={`react-ui-button ${className}`}
        {...otherProps}
      >
        {buttonText}
        {``}
        {buttonIcon && <span>{buttonIcon}</span>}
      </button>
    </>
  );
};

export default Button;
