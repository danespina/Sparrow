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
    console.log(this.state);
  }
  render () {
    let holds;
    if(this.state.portfolio.holdings){
      holds = Object.values(this.state.portfolio.holdings).map((el) => {
      return (<li>{el.asset_id}, {el.position}, {el.avg_price}</li>);
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
