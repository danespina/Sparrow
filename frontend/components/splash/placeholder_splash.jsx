import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render () {
    if(this.props.currentUser) {
      return (
        <Link to='/assets/1'>Peep the only asset!</Link>
      );
    } else {
      return (
        <div className="splash flex flex-vertical">
          <div className="left flex-child">
            <h1>Investing</h1>
            <h1>Now for the rest of us</h1>
            <h4>Sparrow lets you learn to invest in the stock market for free.</h4>
            <Link to='/signup'>Sign Up</Link>
          </div>
          <div className="right flex-child">
            <img src={phoneURL}></img>
          </div>
        </div>
      );
    }
  }
}

export default Splash;
