import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = { portfolio: {} };
  }

  componentDidMount(){
    this.props.fetchPortfolio(this.props.portfolioId).then((data) => {
      this.setState({ portfolio: data.portfolio });
    });
  }
  render () {
    let holds;
    if(this.state.portfolio.holdings && Object.values(this.props.assets).length > 0){
      holds = Object.values(this.state.portfolio.holdings).map((el) => {
      return (<li key={el.asset_id}>You own {this.props.assets[el.asset_id].symbol}, {el.position}, {el.avg_price}!</li>);
      });
    }
    return (
      <div>
        <h1>Hello!</h1>
        <h1>You have ${this.state.portfolio.buying_power}</h1>
        <ul>{holds}</ul>
      </div>
    );
  }
}

export default Dashboard;
