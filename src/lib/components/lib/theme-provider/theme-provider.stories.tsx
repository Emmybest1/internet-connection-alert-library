import React from 'react';
import {ReactUIBucketProvider} from './theme-provider.lib';
import {storiesHierarchy as h, theme} from '../../../../react-ui-bucket';

export default {
  title: `${h.hLayout}/ThemeProvider`,
  component: ReactUIBucketProvider,
};

export const PinkThemeHigh = () => (
  <ReactUIBucketProvider theme={theme.pinkHigh}>
    <h3>Pink High</h3>
  </ReactUIBucketProvider>
);

export const PinkThemeMedium = () => (
  <ReactUIBucketProvider theme={theme.pinkMedium}>
    <h3>Pink Medium</h3>
  </ReactUIBucketProvider>
);

export const PinkThemeLow = () => (
  <ReactUIBucketProvider theme={theme.pinkLow}>
    <h3>Pink Low</h3>
  </ReactUIBucketProvider>
);

export const GreenThemeHigh = () => (
  <ReactUIBucketProvider theme={theme.greenHigh}>
    <h3>Green High</h3>
  </ReactUIBucketProvider>
);

export const GreenThemeMedium = () => (
  <ReactUIBucketProvider theme={theme.greenMedium}>
    <h3>Green Medium</h3>
  </ReactUIBucketProvider>
);

export const GreenThemeLow = () => (
  <ReactUIBucketProvider theme={theme.greenLow}>
    <h3>Green Low</h3>
  </ReactUIBucketProvider>
);
