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

export enum ButtionStructures {
  border = 'border',
  curved = 'curved',
  curvedBorder = 'curved-border',
}

export type TButtonProps = {
  buttonText: string;
  buttonType?: ButtonTypes.button | ButtonTypes.submit | ButtonTypes.reset;
  buttonDisable?: boolean;
  buttonIcon?: React.ReactElement;
  buttonStructure?: ButtionStructures.border | ButtionStructures.curved | ButtionStructures.curvedBorder | string;
  className?: ButtonClassName.danger | ButtonClassName.warning | ButtonClassName.success | string;
  children?: React.ReactNode;
  toolTip?: boolean;
  toolTipHint?: string;
  [x: string]: any;
};

export const Button: React.FC<TButtonProps> = ({
  buttonText,
  buttonType,
  buttonDisable,
  buttonIcon,
  buttonStructure,
  className,
  children,
  toolTip,
  toolTipHint,
  ...otherProps
}): JSX.Element => {
  const [toolTipShown, setToolTipShown] = React.useState<boolean>(false);
  const mouseEnterHandler = (ev: React.MouseEvent<HTMLButtonElement>): void => {
    ev.stopPropagation();
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
        disabled={buttonDisable}
        className={`react-ui-button ${className}`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        data-btn-structure={buttonStructure}
        {...otherProps}
      >
        {buttonText}
        {``}
        {buttonIcon && <span>{buttonIcon}</span>}
        {children}
      </button>
    </>
  );
};

export default Button;
