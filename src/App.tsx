import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TestViews from './test';
import * as Lib from './react-ui-bucket';
import * as Test from './test/export';
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
        <Route exact path="/" component={TestViews} />
        <Route exact path="/inputs" component={Test.Inputs} />
        <Route exact path="/buttons" component={Test.Buttons} />
        <Route exact path="/others" component={Test.Others} />
        <Route exact path="/modals" component={Test.Modals} />

        <Lib.ProtectedRoute
          path="/prot-route"
          exact={true}
          component={() => <h3>Things fall Apart</h3>}
          shouldRender={false}
          fallBackPath="/"
        />
      </Switch>
    </Router>
  );
};

export default App;
