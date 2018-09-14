import React from 'react';
import { Link } from 'react-router-dom';
import AssetIndexContainer from '../asset_index/asset_index_container';

class Splash extends React.Component {
  render () {
    // debugger
    if(this.props.currentUser) {
      return (
        <div>
          <Link to='/assets/1'>Peep the only asset!</Link>
          <AssetIndexContainer />
        </div>
      );
    } else {
      return (
        <div className="splash">
          <div className="flex flex-vertical">
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
        </div>
      );
    }
  }
}

export default Splash;
