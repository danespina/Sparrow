import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import AssetShowContainer from './asset_show/asset_show_container';

const App = () => (
  <div>
    <h1>Sparrow</h1>
    <GreetingContainer />
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/assets/:id" component={AssetShowContainer} />
    </Switch>
  </div>
);

export default App;
