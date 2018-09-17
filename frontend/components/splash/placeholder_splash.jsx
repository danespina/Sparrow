import React from 'react';
import { Link } from 'react-router-dom';
import AssetIndexContainer from '../asset_index/asset_index_container';

class Splash extends React.Component {
  render () {
    // debugger
    if(this.props.currentUser) {
      return (
        <div className="dash">
          <Link to='/assets/1'>Peep the only asset!</Link>
          <AssetIndexContainer />
        </div>
      );
    } else {
      return (
        <div className="splash">
          <div className="flex">
            <div className="left flex-child">
              <div className="left-header">
                <h1>Investing.</h1>
                <h1>Now for the rest of us.</h1>
              </div>
              <div className="left-words">
                <h4>Sparrow lets you learn to invest in the stock market for free.</h4>
              </div>
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
