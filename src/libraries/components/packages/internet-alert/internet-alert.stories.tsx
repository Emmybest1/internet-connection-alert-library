import React from 'react';
import {InternetAlert} from './internet-alert.lib';
import {storiesHierarchy as h, theme} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/InternetAlert View`,
  component: InternetAlert,
};

export const InternetAlertView = () => (
  <InternetAlert bodyText="Opps internet is broken" backgroundColor={theme.pinkLow} />
);
