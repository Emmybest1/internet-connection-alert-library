import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ReactUIBucketProvider} from './react-ui-bucket';

ReactDOM.render(
  <React.StrictMode>
    <ReactUIBucketProvider theme="#fff">
      <App />
    </ReactUIBucketProvider>
  </React.StrictMode>,
  document.getElementById('app-root')
);
