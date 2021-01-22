import React, {useState} from 'react';
import './input.style.scss';

type InputProps = {
  id: string;
  inputType: string;
  inputValue: string;
  inputName: string;
  inputHint?: string;
  inputRegExp?: RegExp;
  labelText?: string;
  fontFamily: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  id,
  inputType,
  inputName,
  inputValue,
  inputHint,
  inputRegExp,
  fontFamily,
  labelText,
  onChange,
}): JSX.Element => {
  const [passedRegExp, setPassedRegExp] = useState<boolean>(true);
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {inputType === 'textarea' ? (
        <textarea id={id} name={inputName} cols={10} rows={5} onChange={() => onChange}></textarea>
      ) : (
        <input
          type={inputType}
          name={inputName}
          aria-label={labelText}
          style={{fontFamily}}
          onChange={() => {
            onChange;
            {
              inputRegExp && inputRegExp.test(inputValue) ? setPassedRegExp(true) : setPassedRegExp(false);
            }
          }}
        />
      )}

      {!passedRegExp && <span className="input-hint">{inputHint}</span>}
    </>
  );
};

export default Input;
