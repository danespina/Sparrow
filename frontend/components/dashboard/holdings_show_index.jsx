import React from 'react';
import { Link } from 'react-router-dom';
import HoldingsItem from './holdings_show_item';

class HoldingsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    let longItems;
    let shortItems;
    if(Boolean(this.props.portfolio)){
      longItems = Object.values(this.props.portfolio.holdings).map((holding) => {
        if (holding.position > 0) {
          return <HoldingsItem key={holding.asset_id} asset={this.props.portfolio.assetInfo[holding.asset_id]} shares={holding.position} />;
        }
      });
    }
    if(Boolean(this.props.portfolio)){
      shortItems = Object.values(this.props.portfolio.holdings).map((holding) => {
        if (holding.position < 0) {
          return <HoldingsItem key={holding.asset_id} asset={this.props.portfolio.assetInfo[holding.asset_id]} shares={holding.position} />;
        }
      });
    }
    return (
      <div className="holdings-form">
        <div className="holdings-header bold">
          <h3>Stocks</h3>
        </div>
        <ul>{longItems}</ul>
        <ul>{shortItems}</ul>
      </div>
    );
  }
}

export default HoldingsIndex;
