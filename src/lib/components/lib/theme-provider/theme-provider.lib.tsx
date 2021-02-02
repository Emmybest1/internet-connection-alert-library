import React from 'react';

type TReactUIBucketProvider = {
  children: React.ReactNode;
  theme: string;
};

/********************************************************************************************************************************************************************************************************
 * @ReactUIBucketProvider : for Create-react-app users wrap it around your App component in the index.js|ts file. for other bootstrapers, wrap it around your root file that renders to the DOM elementNode
 * @useCase : to use our custom theme, simply import it from react-ui-buclet together with this component e.g: import {ReactUIBucketProvider, theme} from './react-ui-bucket';
 * @reference : checkout the stories for more details
 * ******************************************************************************************************************************************************************************************************/

export const ReactUIBucketProvider: React.FC<TReactUIBucketProvider> = ({children, theme}): JSX.Element => {
  return (
    <div
      className="react-ui-bucket-theme-provider-container"
      style={{background: theme, height: '100vh', width: '100%', margin: '0 auto'}}
    >
      {children}
    </div>
  );
};

export default ReactUIBucketProvider;
