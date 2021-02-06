import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as Lib from './react-ui-bucket';
import Inputs from './test/views/inputs.ui';
import TestViews from './test';
import './app.style.scss';

const App: React.FC = (): JSX.Element => {
  /******************************************************************************
   * note: the below useState and useEffect is for experimenting the @Lib.Loader
   ******************************************************************************/
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;

    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  /*
   *testing system and browser info util
   */
  console.log('System info', Lib.system.os, Lib.system.version);
  console.log('Browser info', Lib.browser.name, Lib.browser.version);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TestViews} />
        <Route exact path="/inputs" component={Inputs} />
        <Route
          exact
          path="/modals"
          render={(): JSX.Element => (
            <>
              <h4>Modals Test</h4>
              <Lib.InternetAlert />
              <Lib.Loader isLoading={isLoading} />
              <Lib.ApiErrorEngine
                shouldShowModal={true}
                heading="We are sorry!"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
              />
              <Lib.ApiSuccessEngine
                shouldShowModal={true}
                heading="Its a Success!"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
              />
            </>
          )}
        />

        <Lib.ProtectedRoute
          path="/protected-route"
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
