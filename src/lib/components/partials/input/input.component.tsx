import React, {useState, useEffect} from 'react';
import InputInfoModal from './input-info-modal.component';
import './input.style.scss';

type InputProps = {
  id: string;
  info?: React.ReactNode;
  hint?: string;
  label?: string;
  name: string;
  type: string;
  regExp?: RegExp;
  required?: boolean;
  value?: string;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => any;
};

export const Input: React.FC<InputProps & any> = ({
  id,
  info,
  hint,
  label,
  name,
  regExp,
  required,
  type,
  value,
  ...otherProps
}): JSX.Element => {
  const [passedRegExp, setPassedRegExp] = useState<boolean>(true);
  const [shouldOpenInfo, setShouldOpenInfo] = useState<boolean>(false);

  /*
   * Regexp State Updater
   */
  useEffect(() => {
    regExp && regExp.test(value.toString()) ? setPassedRegExp(true) : setPassedRegExp(false);
  }, [value, regExp]);
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <>
          <textarea id={id} name={name} cols={10} rows={5} required={required} {...otherProps}></textarea>

          {/*
           * this is to be shown at render time for required inputs
           */}
          {required && (
            <span className="reuired-input">
              <i className="fa fa-info-circle"></i> Required field.
            </span>
          )}

          {/*
           * this is to be shown when user enters wrong input
           */}
          {!passedRegExp && (
            <span className="input-hint">
              {hint} <span onClick={() => setShouldOpenInfo(true)}>open info</span>
            </span>
          )}
        </>
      ) : (
        <>
          <input type={type} name={name} aria-label={label} required={required} value={value} {...otherProps} />
          {/*
           * this is to be shown at render time for required inputs
           */}
          {required && (
            <span className="required-input">
              <i className="fa fa-info-circle"></i> Required field.
            </span>
          )}

          {/*
           * this is to be shown when user enters wrong input
           */}
          {!passedRegExp && type !== 'submit' && type !== 'button' && type !== 'reset' && type !== 'search' && (
            <span className="input-hint">
              <i className="fa fa-question-circle"></i> {hint}{' '}
              <span onClick={() => setShouldOpenInfo(true)} className="open-info-btn" role="button">
                open info
              </span>
            </span>
          )}
        </>
      )}

      {shouldOpenInfo && <InputInfoModal info={info} />}
    </>
  );
};

export default Input;
