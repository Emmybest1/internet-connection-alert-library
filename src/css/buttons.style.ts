import styled from 'styled-components';
import {applyStyleModifiers} from 'styled-components-modifiers';
import {defaultThemes} from './utils/themes.utils';

type ButtonProps = {
  'background-color': string;
  border: string;
  'border-radius': string;
  color: string;
  'font-size': string;
  padding: string;
  'min-width': string;
  width: string;
};
export const BUTTON_MODIFIERS = (borderColor: string) => ({
  small: () => `
  font-size:0.8em;
  padding:4px 12px;
  width:100px;
  `,
  large: () => `
  font-size:1em;
  padding:12px 28px;
  width:200px;
  `,
  borderSingle: () => `
  border:solid 2px ${borderColor};
  `,
  borderDouble: () => `
  border:double 2px ${borderColor};
  `,
  borderDashed: () => `
  border:dashed 2px ${borderColor};
  `,
});

export const Button = styled.button`
  border: none;
  padding: 12px 24px;
  min-width: 100px;
  width: 200px;
`;

export const DangerButton = styled(Button)<ButtonProps>`
  background-color: ${defaultThemes.dangerButtonBackgroundColorDefault};
  border-radius: 10px;
  color: ${defaultThemes.dangerButtonTextColor};
  font-size: 1em;
  ${applyStyleModifiers(BUTTON_MODIFIERS(defaultThemes.dangerButtonBackgroundColorDefault))};
`;

export const SuccessButton = styled(Button)`
  background-color: ${defaultThemes.successButtonBackgroundColorDefault};
  border-radius: 10px;
  color: ${defaultThemes.successButtonTextColor};
  font-size: 1em;
  ${applyStyleModifiers(BUTTON_MODIFIERS(defaultThemes.successButtonBackgroundColorDefault))};
`;

export const WarningButton = styled(Button)`
  background-color: ${defaultThemes.warningButtonBackgroundColorDefault};
  border-radius: 10px;
  color: ${defaultThemes.warningButtonTextColor};
  font-size: 1em;
  ${applyStyleModifiers(BUTTON_MODIFIERS(defaultThemes.warningButtonBackgroundColorDefault))};
`;
