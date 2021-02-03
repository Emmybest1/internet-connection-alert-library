import React from 'react';
import {ApiSuccessEngine} from './api-success-engine.lib';
import {storiesHierarchy as h, _truthyOrFalsyDetector} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/ApiSuccessEngine View`,
  component: ApiSuccessEngine,
};

export const DefaultHeadingApiSuccessEngine = () => (
  <ApiSuccessEngine shouldShowModal={_truthyOrFalsyDetector()} message="Success Authorized" />
);

export const customHeadingApiErrorEngine = () => (
  <ApiSuccessEngine
    shouldShowModal={_truthyOrFalsyDetector()}
    heading="API Success"
    message="Unathorized User is not allowed"
  />
);
