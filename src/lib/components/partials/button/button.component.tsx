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

export type TButtonProps = {
  buttonText: string;
  buttonType?: ButtonTypes.button | ButtonTypes.submit | ButtonTypes.reset;
  buttonDisable?: boolean;
  buttonIcon?: React.ReactElement;
  className?: ButtonClassName.danger | ButtonClassName.warning | ButtonClassName.success | string;
  toolTip?: boolean;
  toolTipHint?: string;
  [x: string]: any;
};

export const Button: React.FC<TButtonProps> = ({
  buttonText,
  buttonType,
  buttonDisable,
  buttonIcon,
  className,
  toolTip,
  toolTipHint,
  ...otherProps
}): JSX.Element => {
  const [toolTipShown, setToolTipShown] = React.useState<boolean>(false);
  const mouseEnterHandler = (): void => {
    if (toolTip) {
      setTimeout(() => {
        setToolTipShown(true);
      }, 1000);
    }
    return;
  };

  const mouseLeaveHandler = (): void => {
    if (toolTipShown) {
      setToolTipShown(false);
    }
    return;
  };

  return (
    <>
      {toolTip && toolTipShown && (
        <span className="btn-tooltip" role="tooltip" aria-hidden="true">
          {toolTipHint}
        </span>
      )}
      <button
        type={buttonType ? buttonType : 'button'}
        disabled={buttonDisable ? true : false}
        className={`react-ui-button ${className}`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
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
