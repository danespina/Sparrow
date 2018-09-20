import React from 'react';
import { Link } from 'react-router-dom';
import HoldingsContainer from './holdings_show_container';
import WatchlistContainer from './watchlist_show_container';
import { script } from './script';
import { LineChart, Line, YAxis } from 'recharts';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = { assets: {}, portfolio: {} };
  }

  componentDidMount() {
    this.props.fetchPortfolio(this.props.portfolioId).then((data) => {
      this.setState({ portfolio: data.portfolio });
    });
    // this.props.fetchAllAssets().then((data) => {
    //   this.setState({ assets: data.assets });
    // }).then(() => {
      // this.props.fetchPortfolio(this.props.portfolioId).then((data) => {
      //   console.log(data);
      //   this.setState({ portfolio: data.portfolio });
      // });
    // });
  }
  render () {

    // let holds;
    // if(this.state.portfolio.holdings &&
    //   Object.values(this.props.assets).length > 0){
    //   holds = Object.values(this.state.portfolio.holdings).map((el) => {
    //   return (<li key={el.asset_id}>
    //     You own {this.props.assets[el.asset_id].symbol},
    //     {el.position},
    //     {el.avg_price}!</li>);
    //   });
    // }
    let chart;
    if(this.state.portfolio.history){
      chart = <LineChart width={676} height={196} data={this.state.portfolio.history}>
        <Line type="linear" dataKey="close" stroke="#21ce99" strokeWidth={2} dot={false} animationDuration={0}/>
        <YAxis domain={['auto', 'auto']} hide={true}/>
      </LineChart>;
    }
    return (
      <div className="asset-page">
        <div className="col-2-3">
          <h1>Hello!</h1>
          <h1>You have ${this.state.portfolio.buying_power}</h1>
            {chart}
          <p>{script}</p>
        </div>
        <div className="col-1-3">
          <div className="dash-sidebar">
            <HoldingsContainer assets={this.state.portfolio.assetInfo}/>
            <WatchlistContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
