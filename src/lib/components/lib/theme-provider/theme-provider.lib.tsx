import React from 'react';

type TReactUIBucketProvider = {
  children: React.ReactNode;
  theme: string;
};

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
