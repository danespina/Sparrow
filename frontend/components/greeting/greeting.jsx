import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { searchAssets, createAsset } from '../../util/asset_api_util';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.state = { query: '', results: {} };
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

  clearSearch(e) {
    this.setState({ query: '', results: {} });
  }

  handleChange(e) {
    this.setState({ query: e.currentTarget.value});
    searchAssets(e.currentTarget.value).then((data) => {
      this.setState({ results: data });
    });
  }

  render () {
    let hidden = "";
    if (this.props.location.pathname === "/login" || this.props.location.pathname === "/signup") {
      hidden = "hidden";
    }
    const searchItems = Object.values(this.state.results).map((el) => {
      return (<Link to={`/assets/${el.id}`} onClick={this.clearSearch}><li key={el.id}>{el.symbol} {el.name}</li></Link>);
    });
    const logo = (<svg className="logo" viewBox="0 0 1024 1024">
      <path d="M 0 1000 L 100 1000 L 200 800 L 600 600 L 450 580 L 400 400 L 0 1000z"></path>
      <path d="M 150 750 L 380 380 L 310 380 L 280 280 L 150 750z"></path>
      <path d="M 300 260 L 700 100 L 620 580 L 460 560 L 420 380 L 400 360 L 330 360"></path>
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
                <input type="text" onChange={this.handleChange} value={this.state.query} placeholder={'Search'}></input>
              </form>
              <div className="search-results bold">
                <ul>{searchItems}</ul>
              </div>
            </div>
            <nav className="greet-links">
              <Link to='/'>Home</Link>
              <button onClick={this.handleClick}>Leave</button>
            </nav>
          </div>
        </div>
      </header>);
    } else {
      return(
        <div className={`${hidden}`}>
          <div className={"greeting-container"}>
            <div className="greeting-logo">
              <Link to='/'>{logo}</Link>
            </div>
            <div className="greeting-container-home">
              <div className="greet-links">
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
