/// <reference types="react-scripts" />

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

export interface IBaseComponentsProps {}

export interface APIEngineProps extends IBaseComponentsProps {
  heading?: string;
  message: string;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
  shouldShowModal: boolean;
}
