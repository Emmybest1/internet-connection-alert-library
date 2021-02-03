import React from 'react';
import {ProtectedRoute} from './protected-route.lib';
import {storiesHierarchy as h} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}/ProtectedRoute View`,
  component: ProtectedRoute,
};

export const DontRenderProtectedRoute = () => <ProtectedRoute shouldRender={false} fallBackPath="/" />;

export const RenderProtectedRouteView = () => <ProtectedRoute shouldRender={true} fallBackPath="/" />;
