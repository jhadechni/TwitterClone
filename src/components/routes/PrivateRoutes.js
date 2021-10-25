import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        /*window.localStorage.getItem('USER_KEY') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )*/
        <Component {...props} />
      )}
    />
  );
};
