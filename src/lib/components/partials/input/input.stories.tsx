import React from 'react';
import {Input} from './input.component';
import {storiesHierarchy as h, theme, _truthyOrFalsyDetector} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/Input`,
  component: Input,
};

export const SearchInput = () => <Input type="search" id="sxr3383" name="searchContent" placeholder="Search Input" />;
export const TextInput = () => (
  <Input
    type="text"
    id="txr3383"
    name="firstName"
    regExp={/^[A-z]$/}
    hint="Please the firstName must be written in alphabets"
    placeholder="Text Input"
  />
);
export const RadioInput = () => <Input type="radio" id="rar3383" name="codingLanguage" value="Javascript" />;
export const CheckboxInput = () => <Input type="checkbox" id="chr3383" name="javascript" value="Javascript" />;
export const ColorInput = () => <Input type="color" id="pnk3383" name="pinkLow" value={theme.pinkLow} />;
