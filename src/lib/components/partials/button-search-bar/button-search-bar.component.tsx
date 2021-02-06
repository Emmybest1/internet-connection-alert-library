import React from 'react';
import Button from '../button/button.component';
import Input from '../input/input.component';
import './button-search-bar.style.scss';

type TButtonSearchBarProps = {
  id: string;
  name: string;
  placeholder: string;
  onClick: (...arg: any) => any;
};

const ButtonSearchBar: React.FC<TButtonSearchBarProps & any> = ({
  id,
  name,
  placeholder,
  onClick,
  ...otherProps
}): JSX.Element => {
  return (
    <span className="btn-search-bar-container">
      <Input id={id} type="search" name={name} placeholder={placeholder} className="search-bar" {...otherProps} />
      <Button buttonText="Search" className="search-btn" type="submit" onClick={onClick} />
    </span>
  );
};

export default ButtonSearchBar;
