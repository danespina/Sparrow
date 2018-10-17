import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';
import AssetNews from './asset_news';
import AssetChart from './asset_chart';
import AssetAbout from './asset_about';
import TradeContainer from '../trade_show/trade_container';

class AssetShow extends React.Component {
  constructor(props){
    super(props);
    let beingWatched = false;
    if (Boolean(this.props.watchlist)){
      beingWatched = Object.keys(this.props.watchlist).includes(this.props.assetId);
    }
    this.state = { assets: {}, watching: beingWatched };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!this.state.watching) {
      this.props.addToWatchlist(this.props.assetId);
      this.setState({ watching: true });
    } else {
      this.props.removeFromWatchlist(this.props.assetId);
      this.setState({ watching: false });
    }
  }

  componentDidMount() {
    // TODO: check if portfolio to prevent invalid trades
    this.props.fetchAsset(this.props.assetId).then(
      (arg) => {
        this.setState({ assets: {[arg.asset.id]: arg.asset } });
      }).then(
        () => {
          return getExternalInfo("quote", this.state.assets[this.props.assetId]);
        }
      ).then((data) => {
        this.setState({ assets: {[this.props.assetId]: data}});
      });
    if (!this.props.portfolio) {
      this.props.fetchPortfolio(this.props.currentUserId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.assetId !== this.props.assetId) {
      this.props.fetchAsset(nextProps.assetId).then(
        (arg) => {
          this.setState({ assets: {[arg.asset.id]: arg.asset } });
        }).then(
          () => {
            return getExternalInfo("quote", this.state.assets[nextProps.assetId]);
          }
        ).then((data) => {
          this.setState({ assets: {[nextProps.assetId]: data}});
        });
    }
  }

  render () {
    if(!this.state.assets[this.props.assetId]){
      return (<div className="cover">
        <div className="loader" id="loader-6">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>);
    } else {
      const curAsset = this.state.assets[parseInt(this.props.assetId)];
      return (
        <div className="asset-page">
          <div className = "col-2-3">
            <div className="asset-show-main">
              <header className="asset-show-header">
                <h1>{curAsset.companyName}</h1>
                <span className="display-nums">${curAsset.latestPrice}</span>
              </header>
              <AssetChart asset={curAsset} />
              <AssetAbout asset={curAsset} />
              <AssetNews asset={curAsset} />
            </div>
          </div>
          <div className="col-1-3">
            <div className="sidebar">
              <TradeContainer asset={curAsset} assetId={this.props.assetId} />
              <button className="watchlist-button" onClick={this.handleClick}>{this.state.watching ? 'Remove from' : 'Add to' } Watchlist!</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AssetShow;
