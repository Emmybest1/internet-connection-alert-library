import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Loader} from './loader.lib';
import {ReactUIBucketProvider} from '../theme-provider/theme-provider.lib';
import {storiesHierarchy as h, theme} from '../../../../react-ui-bucket';

export default {
  title: `${h.hPages}`,
  component: Loader,
  decorators: [
    (Story) => (
      <ReactUIBucketProvider theme={theme.purpleLow}>
        <Story />
      </ReactUIBucketProvider>
    ),
  ],
} as Meta;

export const AssertiveLoader = () => <Loader isLoading={true} assertive={true} />;

export const CustomIconLoader = () => <Loader isLoading={true} loadingIcon={<img src={``} alt="" />} />;
