import React, {useState, useEffect} from 'react';
import InputInfoModal from './input-info-modal.component';
import './input.style.scss';

type InputProps = {
  id: string;
  hint?: string;
  info?: React.ReactNode;
  label?: string;
  name: string;
  type: string;
  regExp?: RegExp;
  value?: string;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement>) => any;
};

export const Input: React.FC<InputProps & any> = ({
  id,
  type,
  name,
  hint,
  regExp,
  label,
  info,
  value,
  ...otherProps
}): JSX.Element => {
  const [passedRegExp, setPassedRegExp] = useState<boolean>(true);

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
        <textarea id={id} name={name} cols={10} rows={5} {...otherProps}></textarea>
      ) : (
        <input type={type} name={name} aria-label={label} {...otherProps} />
      )}

      {!passedRegExp && <span className="input-hint">{hint}</span>}

      <InputInfoModal info={info} />
    </>
  );
};

export default Input;
