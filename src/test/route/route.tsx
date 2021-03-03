import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {ProtectedRoute} from '../../react-ui-bucket';
import * as Test from '../export';

const TestRoute = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Test.Home} />
        <Route exact path="/inputs" component={Test.Inputs} />
        <Route exact path="/buttons" component={Test.Buttons} />
        <Route exact path="/others" component={Test.Others} />
        <Route exact path="/modals" component={Test.Modals} />
        <ProtectedRoute
          exact
          path="/prot-route"
          component={() => <h3>Things fall Apart</h3>}
          shouldRender={false}
          fallBackPath="/"
        />
      </Switch>
    </>
  );
};

export default TestRoute;
