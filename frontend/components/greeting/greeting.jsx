import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createAsset } from '../../util/asset_api_util';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.logout();
  }

  makeSeeds(e) {
    $.ajax({
      method: "GET",
      url: `https://api.iextrading.com/1.0/ref-data/symbols`,
    }).then((resArr) => {
      resArr.map((el) => {
        return createAsset({ symbol: el.symbol, name: el.name });
      });
    });
  }

  render () {
    const logo = (<svg className="logo" viewBox="0 0 1024 1024">
    <path class="path1" d="M 0 1000 L 100 1000 L 200 800 L 600 600 L 450 580 L 400 400 L 0 1000z"></path>
  <path class="path1" d="M 150 750 L 380 380 L 310 380 L 280 280 L 150 750z"></path>
  <path class="path1" d="M 300 260 L 700 100 L 620 580 L 460 560 L 420 380 L 400 360 L 330 360"></path>
  </svg>);
    if (this.props.currentUser) {
      return(
      <header className="greeting-container">
        <div className="greeting-logo">
          <Link to='/'>{logo}</Link>
        </div>
        <div className="greeting-container-middle">
          <div className="greeting-flex">
            <div className="greeting-search">
              <form>
                <input type="text" value="don't search yet"></input>
              </form>
            </div>
            <nav className="greet-links">
              <button onClick={this.makeSeeds}>Make the seeds!</button>
              <Link to='/'>Home</Link>
              <button onClick={this.handleClick}>Leave</button>
            </nav>
          </div>
        </div>
      </header>);
    } else {
      return(
        <div className="greeting-container">
          <div className="greeting-logo">
            <Link to='/'>{logo}</Link>
          </div>
          <div className="greet-links">
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log In</Link>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
