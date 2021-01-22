import React from 'react';
import {Route, RouteProps} from 'react-router-dom';
import {FallBackEngine} from '../../react-ui-bucket';

interface IProtectedRouteProps extends RouteProps {
  fallBackPath: string;
  shouldRender: boolean;
}
export const ProtectedRoute: React.FC<IProtectedRouteProps> = (props): JSX.Element => {
  return (
    <>
      {props.shouldRender ? (
        <Route {...props} component={props.component} />
      ) : (
        <FallBackEngine
          textToDisplay="Sorry you don't have access to this page"
          heading={<h3>Unathorised User</h3>}
          fallBackPath={props.fallBackPath}
          buttonText="Go Home"
        />
      )}
    </>
  );
};

export default ProtectedRoute;
