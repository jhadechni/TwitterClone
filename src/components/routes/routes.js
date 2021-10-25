import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';
import {
  GeneralHome,
  Home,
  Login,
  PasswordRecovery,
  SingUp,
  Profile
} from '../../views';
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={GeneralHome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SingUp} />
        <Route exact path="/passwordRecovery" component={PasswordRecovery} />
        <Route exact path="/profile" component={Profile} /> 
        {/* Private Routes */}
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
