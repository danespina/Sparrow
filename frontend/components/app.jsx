import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AssetShowContainer from './asset_show/asset_show_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <h1>Sparrow</h1>
    <GreetingContainer />
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/assets/:id" component={AssetShowContainer} />
    </Switch>
  </div>
);

export default App;
