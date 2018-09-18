import React from 'react';
import merge from 'lodash/merge';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {position: 0};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick(e){
    const trade = merge({}, this.state, {asset_id: this.props.assetId, avg_price: this.props.asset.latestPrice});
    this.props.makeTrade(trade);
  }
  handleChange(e){
    this.setState({position: e.target.value });
  }
  render () {
    return (
      <div>
        <form>
          <label>position
            <input type={"text"} onChange={this.handleChange} value={this.state.position}></input>
          </label>
          <button onClick={this.handleClick}>Make trade!</button>
        </form>
      </div>
    );
  }
}

export default TradeForm;
