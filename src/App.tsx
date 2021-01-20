import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {InternetAlert} from './component/lib/internet-alert/internet-alert.lib';
import ApiErrorEngine from './component/lib/api-error-engine/api-error-engine.lib';
import ApiSuccessEngine from './component/lib/api-sucess-engine/api-success-engine.lib';
import './app.style.scss';

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
              <InternetAlert />
              <ApiErrorEngine
                shouldShowModal={true}
                heading="We are sorry!"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
                retryFunc={() => console.log('Retried')}
              />
              <ApiSuccessEngine
                shouldShowModal={true}
                heading="Its a Success!"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nisi aspernatur exercitationem autem!"
                retryFunc={() => console.log('Retried')}
              />
            </>
          )}
        />
      </Router>
    </>
  );
};

export default App;
