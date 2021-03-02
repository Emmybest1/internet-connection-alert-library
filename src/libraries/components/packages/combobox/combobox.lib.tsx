import React from 'react';
import {useUniqueIds} from '../../../../hooks/useUniqueIds';
import Input from '../../partials/input/input.component';

interface IItem {
  id: string | number;
  name?: string;
  value: string;
}
type TComboboxProps = {
  itemType: string; //itemType e.g fruits or countries
  items: IItem[];
  itemClickHandler: Function | ((item: IItem) => void | any);
};

const Combobox: React.FC<TComboboxProps> = ({itemType, items, itemClickHandler}): JSX.Element => {
  const [comboInputId] = useUniqueIds(1);
  return (
    <div
      className="combobox-container"
      role="combobox"
      aria-expanded="false"
      aria-owns="combobox-listbox"
      aria-haspopup="listbox"
    >
      <Input type="text" id={comboInputId} aria-autocomplete="list" aria-controls="combobox-listbox" />

      <ul
        aria-labelle={`collection of ${itemType}`}
        role="listbox"
        id="combobox-listbox"
        className="listbox listbox--hidden"
      >
        {items.map((item) => (
          <li key={item.id} onClick={() => itemClickHandler(item)}>
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Combobox;
