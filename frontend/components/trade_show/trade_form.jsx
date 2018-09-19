import React from 'react';
import merge from 'lodash/merge';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {position: 0};
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.tradeErrors = [];
  }
  handleClick(e){
    // TODO: verify trade is valid
    const trade = merge({}, this.state, {asset_id: this.props.assetId, avg_price: this.props.asset.latestPrice});
    if (this.props.portfolio.buying_power > (this.state.position * this.props.asset.latestPrice)){
      this.props.makeTrade(trade);
    } else {
      this.tradeErrors.push("Not enough buying power!");
    }
    this.setState({position: 0});
  }
  componentDidMount() {
    // if (Object.keys(this.props.portfolio).length < 1) {
    //   this.props.fetchPortfolio(this.props.user.portfolioId);
    // }
  }
  handleChange(e){
    this.setState({position: e.target.value });
  }
  render () {
    const errs = this.tradeErrors.map((el) => {
      return (<li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <g fill="none" fillRule="evenodd" transform="translate(0 -1)">
            <circle cx="9" cy="10" r="9" fill="#303032"/>
            <text fill="#FFF" fontSize="14" fontWeight="700" letterSpacing=".058">
              <tspan x="6.409" y="15">!</tspan>
            </text>
          </g>
        </svg>
        {el}</li>);
    });
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
            <ul>{errs}</ul>
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
