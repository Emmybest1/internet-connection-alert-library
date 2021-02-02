import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ReactUIBucketProvider, theme} from './react-ui-bucket';

ReactDOM.render(
  <React.StrictMode>
    <ReactUIBucketProvider theme={theme.pinkHigh}>
      <App />
    </ReactUIBucketProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
