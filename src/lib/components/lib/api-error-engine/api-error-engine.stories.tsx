import React from 'react';
import {ApiErrorEngine} from './api-error-engine.lib';
import {storiesHierarchy as h, _truthyOrFalsyDetector} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/ApiErrorEngine View`,
  component: ApiErrorEngine,
};

export const DefaultHeadingApiErrorEngine = () => (
  <ApiErrorEngine shouldShowModal={_truthyOrFalsyDetector()} message="Unathorized User is not allowed" />
);

export const customHeadingApiErrorEngine = () => (
  <ApiErrorEngine
    shouldShowModal={_truthyOrFalsyDetector()}
    heading="API Auth Error"
    message="Unathorized User is not allowed"
  />
);
