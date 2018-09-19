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
    // TODO: verify trade is valid
    const trade = merge({}, this.state, {asset_id: this.props.assetId, avg_price: this.props.asset.latestPrice});
    this.props.makeTrade(trade);
    this.setState({position: 0});
  }
  handleChange(e){
    this.setState({position: e.target.value });
  }
  render () {
    return (
      <div className="trade-form">
        <div className="trade-form-header bold">
          <h3>Buy {this.props.asset.symbol}</h3>
        </div>
        <form>
          <div className="trade-form-row">
            <label>Shares</label>
              <input type={"text"} onChange={this.handleChange} value={this.state.position}></input>
          </div>
          <div className="trade-form-row">
            <h4>Market Price</h4> <h4>${this.props.asset.latestPrice}</h4>
          </div>
          <div className="trade-form-row bold">
            <h4>Estimated Cost</h4> <h4>${this.props.asset.latestPrice * this.state.position}</h4>
          </div>
          <div className="trade-form-row">
            <button onClick={this.handleClick}>Make trade!</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TradeForm;
