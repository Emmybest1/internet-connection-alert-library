import React from 'react';
import {FallBackEngine} from './fallback-engine.lib';
import {storiesHierarchy as h} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/FallBack View`,
  component: FallBackEngine,
};

export const FallBackView = () => (
  <FallBackEngine
    textToDisplay="Sorry you are not authorized to access the view"
    buttonText="Go Home"
    fallBackPath="/home"
  />
);
