/// <reference types="react-scripts" />

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

export type APIEngineProps = {
  shouldShowModal: boolean;
  heading?: string;
  message: string;
  fontFamily?: string;
  retryFunc: any;
  bgColor?: string;
  txtColor?: string;
  btnBgColor?: string;
  btnTxtColor?: string;
  modalPosition?: ModalPosition.top | ModalPosition.bottom | ModalPosition.right | ModalPosition.left;
};
