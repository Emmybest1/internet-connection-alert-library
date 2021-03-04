/// <reference types="react-scripts" />

export interface IBaseComponentsProps {}

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}
export interface IAPIEngineProps extends IBaseComponentsProps {
  heading?: string;
  message: string;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
  shouldShowModal: boolean;
}

//combobox Item data type-system
export interface IComboboxItem {
  id: string | number;
  name?: string;
  value: string;
  [x: string]: any;
}
