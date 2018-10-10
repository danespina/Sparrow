import React from 'react';
import { Link } from 'react-router-dom';
import AssetIndexContainer from '../asset_index/asset_index_container';
import DashboardContainer from '../dashboard/dashboard_container';

class Splash extends React.Component {
  // <AssetIndexContainer />
  render () {
    if(this.props.currentUser) {
      return (
        <div className="dash">
          <DashboardContainer currentUserId={this.props.currentUser.id}/>
        </div>
      );
    } else {
      return (
        <div className="splash">
          <div className="flex-col">
            <div className="home-row">
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
                <video width="452" autoPlay loop >
                  <source src={phone1URL} type="video/webm" ></source>
                </video>
              </div>
            </div>
            <div className="home-row">
              <div className="left flex-child">
                <video width="452" autoPlay loop >
                  <source src={phone2URL} type="video/webm" ></source>
                </video>
              </div>
              <div className="right flex-child">
                <div className="left-header">
                  <h1>Invest for free</h1>
                </div>
                <div className="left-words">
                  <h4>We believe that the financial system should work for the rest of us, not just the wealthy.</h4>
                  <h4>We’ve cut the fat that makes other brokerages costly,
                    like manual account management and hundreds of storefront locations,
                    so we can offer zero commission trading.</h4>
                </div>
              </div>
            </div>
            <div className="home-row">
              <div className="left flex-child">
                <div className="left-header">
                  <h1>No manual needed.</h1>
                </div>
                <div className="left-words">
                  <h4>We’ve designed Sparrow from the ground up for the next generation of newcomers and experts alike.</h4>
                  <h4>It’s fast, dead simple and just works.</h4>
                </div>
              </div>
              <div className="right flex-child">
                <img src={phone3URL}></img>
              </div>
            </div>
            <div className="home-row">
              <div className="right flex-child">
                <video width="452" autoPlay loop >
                  <source src={phone4URL} type="video/webm" ></source>
                </video>
              </div>
              <div className="left flex-child">
                <div className="left-header">
                  <h1>Learn by doing.</h1>
                </div>
                <div className="left-words">
                  <h4>With Robinhood, you can learn to invest in the stock market as you build out your portfolio.</h4>
                  <h4>Discover new stocks through Collections, track your favorites with a personalized news feed, and more.</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Splash;
