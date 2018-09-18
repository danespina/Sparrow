import React from 'react';
import { Link } from 'react-router-dom';
import HoldingsItem from './holdings_show_item';

class HoldingsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    let stockItems;
    if(Object.values(this.props.portfolios).length > 0){
      // debugger;
      stockItems = Object.values(Object.values(this.props.portfolios)[0].holdings).map((holding) => {
        return <HoldingsItem asset={this.props.assets[holding.asset_id]} shares={holding.position} />;
      });
    }
    return (
      <div className="col-1-3">
        <div className="holdings-form">
          <div className="holdings-header bold">
            <h3>Stocks</h3>
          </div>
          <ul>{stockItems}</ul>
        </div>
      </div>
    );
  }
}

export default HoldingsIndex;
