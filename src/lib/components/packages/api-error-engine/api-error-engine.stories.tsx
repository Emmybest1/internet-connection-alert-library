import React from 'react';
import {ApiErrorEngine} from './api-error-engine.lib';
import {storiesHierarchy as h, truthyOrFalsyDetector} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/ApiErrorEngine View`,
  component: ApiErrorEngine,
};

export const DefaultHeadingApiErrorEngine = () => (
  <ApiErrorEngine shouldShowModal={truthyOrFalsyDetector()} message="Unathorized User is not allowed" />
);

export const customHeadingApiErrorEngine = () => (
  <ApiErrorEngine
    shouldShowModal={truthyOrFalsyDetector()}
    heading="API Auth Error"
    message="Unathorized User is not allowed"
  />
);
