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
      resArr.slice(0,200).map((el) => {
        return createAsset(el.symbol);
      });
    });
  }

  render () {
    if (this.props.currentUser) {
      return(
      <header className="greeting-container">
        <Link to='/'><img src={window.flagURL} /></Link>
        <form>
          <input type="text" value="don't search yet"></input>
        </form>
        <button onClick={this.makeSeeds}>Make the seeds!</button>
        <button onClick={this.handleClick}> Leave </button>
      </header>);
    } else {
      return(
        <div className="greeting-container">
          <Link to='/'><img src={window.flagURL} /></Link>
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
