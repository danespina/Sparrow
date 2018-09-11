import React from 'react';
import ReactDom from 'react-dom';
// import Root from './components/root';

import { signup, login, logout } from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(<h1>Sparrow</h1>, root);
});
