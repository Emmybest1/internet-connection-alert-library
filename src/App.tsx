import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import TestRoute from './test/route/route';
import * as Lib from './react-ui-bucket';
import './app.style.scss';

const App: React.FC = (): JSX.Element => {
  /*
   *testing system and browser info util
   */
  console.log('System info', Lib.system.os, Lib.system.version);
  console.log('Browser info', Lib.browser.name, Lib.browser.version);

  return (
    <Router>
      <Switch>
        <TestRoute />
      </Switch>
    </Router>
  );
};

export default App;
