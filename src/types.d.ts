/// <reference types="react-scripts" />

export enum ModalPosition {
  top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
}

export enum theme {
  redHigh = '#660708',
  redMedium = '#a4161a',
  redLow = '#ba181b',

  blueHigh = '#013a63',
  blueMedium = '#01497c',
  blueLow = '#014f86',

  greenHigh = '#1b4332',
  greenMedium = '#2d6a4f',
  greenLow = '#40916c',

  yellowHigh = '#ffca3a',
  yellowMedium = '#ffd100',
  yellowLow = '#ffee32',

  orangeHigh = '#e59500',
  orangeMedium = '#ffa200',
  orangeLow = '#ffb700',

  pinkHigh = '#ff7096',
  pinkMedium = '#ff99ac',
  pinkLow = '#f9bec7',

  purpleHigh = '#662e9b',
  purpleMedium = '#5e548e',
  purpleLow = '#9f86c0',
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
