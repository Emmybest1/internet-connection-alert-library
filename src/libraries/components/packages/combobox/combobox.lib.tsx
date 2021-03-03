import React, {useState, useEffect} from 'react';
import {useUniqueIds} from '../../../../hooks/useUniqueIds';
import Input from '../../partials/input/input.component';
import './combobox.style.scss';

interface IItem {
  id: string | number;
  name?: string;
  value: string;
}

type TComboboxProps = {
  itemType: string; //itemType e.g fruits or countries
  items: IItem[];
  itemClickHandler?: Function | ((item: IItem, searchedKeyword: string) => void | any);
};

export const Combobox: React.FC<TComboboxProps> = ({itemType, items, itemClickHandler}): JSX.Element => {
  const [comboInputId] = useUniqueIds(1);
  const [searchedKeyword, setSearchedKeyword] = useState<string>('');
  const [isAriaExpanded, setIsAriaExpanded] = useState<boolean>(false);

  //update isAriaExpanded
  useEffect(() => {
    !!searchedKeyword ? setIsAriaExpanded(true) : setIsAriaExpanded(false);
  }, [searchedKeyword]);

  return (
    <div
      className="combobox combobox-container"
      aria-expanded={isAriaExpanded}
      aria-owns="combobox-listbox"
      aria-haspopup="listbox"
    >
      <span>
        <Input
          type="text"
          id={comboInputId}
          role="combobox"
          aria-autocomplete="list"
          aria-controls="combobox-listbox"
          className="combobox--input"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setSearchedKeyword(ev.target.value)}
        />
        <i className="fal fa-angle-down"></i>
      </span>

      {!!searchedKeyword && (
        <ul aria-label={`collection of ${itemType}`} role="listbox" id="combobox-listbox" className="combobox--listbox">
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => itemClickHandler && itemClickHandler(item, searchedKeyword)}
              className={`list-item list-item--${item.value.includes(searchedKeyword) ? 'green' : ''}`}
            >
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
