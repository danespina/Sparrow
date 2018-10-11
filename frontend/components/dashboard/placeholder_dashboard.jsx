import React from 'react';
import { Link } from 'react-router-dom';
import HoldingsContainer from './holdings_show_container';
import WatchlistContainer from './watchlist_show_container';
import { script } from './script';
import { LineChart, PieChart, Line, YAxis, XAxis, CartesianAxis, Tooltip, Pie } from 'recharts';
import AssetNews from '../asset_show/asset_news';

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
        <Line type="linear" dataKey="close" stroke="#21ce99" strokeWidth={2} dot={false} />
        <Tooltip viewBox={{ x: 0, y: 0, width: 50, height: 30 }} />
        <YAxis domain={['auto', 'auto']} hide={true}/>
        <XAxis dataKey="label" hide={true} />
      </LineChart>;
    }
    let holdingsChart;
    if (this.state.portfolio.holdings) {
      const pieData = Object.values(this.state.portfolio.holdings).map((holding) => {
        console.log(this.state.portfolio.assetInfo[holding.asset_id].symbol)
        console.log(holding.position)
          return { symbol: this.state.portfolio.assetInfo[holding.asset_id].symbol, position: holding.position };
      });
      holdingsChart = <PieChart width={676} height={250}>
                        <Pie data={pieData} dataKey="position" nameKey="symbol" cx="50%" cy="50%" outerRadius={100} fill="#21ce99" />
                        <Tooltip />
                      </PieChart>;

    }
    let fakeAsset;
    let news = <div className="cover">
      <div className="loader" id="loader-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>;
    if (this.state.portfolio.key) {
      fakeAsset = { name: 'stocks', key: this.state.portfolio.key };
      news = <AssetNews asset={fakeAsset} />;
    }
    return (
      <div className="asset-page">
        <div className="col-2-3">
          <h1>Hello!</h1>
          <h1>You have ${this.state.portfolio.buying_power}</h1>
          <div className="the-chart">
            {chart}
            {holdingsChart}
          </div>
          {news}
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
