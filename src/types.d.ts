/// <reference types="react-scripts" />

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

export interface IBaseComponentsProps {
  backgroundColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  contentTextColor?: string;
}

export interface APIEngineProps extends IBaseComponentsProps {
  shouldShowModal: boolean;
  heading?: string;
  message: string;
  fontFamily?: string;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
}
