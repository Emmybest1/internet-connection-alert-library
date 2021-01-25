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

export const BUTTON_MODIFIERS = (color: string) => ({
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
  danger: () => `
  background-color: ${defaultThemes.dangerButtonBackgroundColorDefault};
  color: ${defaultThemes.dangerButtonTextColor};
  `,
  warning: () => `
  background-color: ${defaultThemes.warningButtonBackgroundColorDefault};
  color: ${defaultThemes.warningButtonTextColor};
  `,
  success: () => `
  background-color: ${defaultThemes.successButtonBackgroundColorDefault};
  color: ${defaultThemes.successButtonTextColor};
  `,
  borderSingle: () => `
  border:solid 2px ${color};
  `,
  borderDouble: () => `
  border:double 2px ${color};
  `,
  borderDashed: () => `
  border:dashed 2px ${color};
  `,
});

export const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 1em;
  padding: 12px 24px;
  min-width: 100px;
  width: 200px;
  ${applyStyleModifiers(BUTTON_MODIFIERS('#000'))}
`;
