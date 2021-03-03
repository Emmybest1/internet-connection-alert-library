import React from 'react';
import {Route} from 'react-router-dom';
import {ProtectedRoute} from '../../react-ui-bucket';
import * as Test from '../export';

const TestRoute = () => {
  return (
    <>
      <Route exact path="/" component={Test.Home} />
      <Route exact path="/inputs" component={Test.Inputs} />
      <Route exact path="/buttons" component={Test.Buttons} />
      <Route exact path="/others" component={Test.Others} />
      <Route exact path="/modals" component={Test.Modals} />

      <ProtectedRoute
        path="/prot-route"
        exact={true}
        component={() => <h3>Things fall Apart</h3>}
        shouldRender={false}
        fallBackPath="/"
      />
    </>
  );
};

export default TestRoute;
