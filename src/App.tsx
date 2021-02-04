import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as Lib from './react-ui-bucket';
import './app.style.scss';

const App: React.FC = (): JSX.Element => {
  /******************************************************************************
   * note: the below useState and useEffect is for experimenting the @Lib.Loader
   ******************************************************************************/
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [firstName, setFirstName] = React.useState<string>('');

  React.useEffect(() => {
    let timeout: NodeJS.Timeout /*|number*/;

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
        <Route
          exact
          path="/"
          render={(): JSX.Element => (
            <>
              <h4>Testing Internet Connection Component </h4>
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

        <Route
          exact
          path="/inputs"
          render={(): JSX.Element => (
            <>
              <Lib.Input
                id="tx123"
                type="text"
                name="firstName"
                placeholder="First Name"
                regExp={/^s*[A-za-z]*$/}
                hint="Please the firstName must be written in alphabets"
                value={firstName}
                onKeyDown={(ev: React.ChangeEvent<HTMLInputElement>): void => setFirstName(ev.target.value)}
              />
            </>
          )}
        />

        <Lib.ProtectedRoute
          path="/chenue-achebe"
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
