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
    <GreetingContainer />
    <main className="main">
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <main className="main-content">
        <Route exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/assets/:id" component={AssetShowContainer} />
      </main>
    </main>
  </div>
);

export default App;
