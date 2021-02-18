import React, {useState, useEffect} from 'react';
import InputInfoModal from './input-info-modal.component';
import './input.style.scss';

type TInputProps = {
  id: string;
  info?: React.ReactNode;
  hint?: string;
  label?: string;
  type: string;
  regExp?: RegExp;
  required?: boolean;
  value?: string;
  [x: string]: any;
};

export const Input: React.FC<TInputProps> = ({
  id,
  info,
  hint,
  label,
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
    if (regExp) {
      regExp.test(value ? value.toString() : '') ? setPassedRegExp(true) : setPassedRegExp(false);
    }
  }, [value, regExp]);
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <>
          <textarea
            id={id}
            cols={10}
            rows={5}
            required={required}
            aria-required={required ? true : false}
            {...otherProps}
          ></textarea>

          {/*
           * this is to be shown at render time for required inputs
           */}
          {required && (
            <span className="reuired-input">
              <i className="fa fa-info-circle"></i> Required field.
            </span>
          )}

          {/*
           * this is to be shown when user enters wrong input for textarea types
           */}
          {!passedRegExp && (
            <span className="input-hint">
              {hint}{' '}
              <span onClick={() => setShouldOpenInfo(true)} role="button" tabIndex={0}>
                open info
              </span>
            </span>
          )}
        </>
      ) : (
        <>
          <input
            type={type}
            aria-label={label}
            required={required}
            value={value}
            {...otherProps}
            aria-required={required ? true : false}
          />
          {/*
           * this is to be shown at render time for required inputs
           */}
          {required && (
            <span className="required-input">
              <i className="fa fa-info-circle"></i> Required field.
            </span>
          )}

          {/*
           * this is to be shown when user enters wrong input for input types
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
