import React, {useState} from 'react';
import './input.style.scss';

type InputProps = {
  id: string;
  fontFamily?: string;
  fileFormat?: string;
  hint?: string;
  label?: string;
  name: string;
  type: string;
  value: string;
  regExp?: RegExp;
};

export const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  value,
  hint,
  regExp,
  fontFamily,
  label,
  fileFormat,
  ...otherProps
}): JSX.Element => {
  const [passedRegExp, setPassedRegExp] = useState<boolean>(true);
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      {type === 'textarea' ? (
        <textarea id={id} name={name} cols={10} rows={5} {...otherProps}></textarea>
      ) : (
        <input
          type={type}
          name={name}
          accept={fileFormat ? fileFormat : ''}
          aria-label={label}
          style={{fontFamily}}
          onKeyDown={(ev: React.KeyboardEvent<HTMLInputElement>) => {
            regExp && regExp.test(ev.toString()) ? setPassedRegExp(true) : setPassedRegExp(false);
          }}
          {...otherProps}
        />
      )}

      {!passedRegExp && <span className="input-hint">{hint}</span>}
    </>
  );
};

export default Input;
