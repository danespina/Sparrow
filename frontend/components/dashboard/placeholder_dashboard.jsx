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

  // TODO: Add holdings by sector
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
    let longChart;
    let shortChart;
    let longData = [];
    let shortData = [];
    if (this.state.portfolio.holdings) {
      const pieData = Object.values(this.state.portfolio.holdings).forEach((holding) => {
        if (holding.position > 0) {
          return longData.push({ symbol: this.state.portfolio.assetInfo[holding.asset_id].symbol, position: holding.position });
        } else if (holding.position < 0) {
          return shortData.push({ symbol: this.state.portfolio.assetInfo[holding.asset_id].symbol, position: Math.abs(holding.position) });
        }
      });
      longChart = <PieChart width={333} height={250}>
                        <Pie data={longData} dataKey="position" nameKey="symbol" cx="50%" cy="50%" outerRadius={100} innerRadius={50} fill="#21ce99" />
                        <Tooltip />
                      </PieChart>;
      shortChart = <PieChart width={333} height={250}>
                        <Pie data={shortData} dataKey="position" nameKey="symbol" cx="50%" cy="50%" outerRadius={100} innerRadius={50} fill="#f45531" />
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
          <h1>Welcome to Sparrow</h1>
          <h1>You have ${this.state.portfolio.buying_power}</h1>
          <div className="the-chart">
            {chart}
            <div className="asset-header">
              <h2>Holdings</h2>
            </div>
            <div className="pie-charts">
              <div className="long-pie">
                <h2>Long</h2>
                {longChart}
              </div>
              <div className="short-pie">
                <h2>Short</h2>
                {shortChart}
              </div>
            </div>
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
