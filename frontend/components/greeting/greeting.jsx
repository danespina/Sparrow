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
    if (this.props.currentUser) {
      return(
      <header className="greeting-container">
        <div className="greeting-logo">
          <Link to='/'><img src={window.flagURL} /></Link>
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
            <Link to='/'><img src={window.flagURL} /></Link>
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
