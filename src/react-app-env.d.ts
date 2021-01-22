/// <reference types="react-scripts" />

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

export interface IBaseComponentsProps {
  bgColor?: string;
  btnBgColor?: string;
  btnTxtColor?: string;
  txtColor?: string;
}

export interface APIEngineProps extends IBaseComponentsProps {
  shouldShowModal: boolean;
  heading?: string;
  message: string;
  fontFamily?: string;
  retryFunc: any;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
}
