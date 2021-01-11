import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import InternetConnectionAlert from './component/internet-connection-alert/internet-connection-alert.component';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={(): JSX.Element => (
            <>
              <h4>Testing Internet Connection Component </h4>
              <InternetConnectionAlert />
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
