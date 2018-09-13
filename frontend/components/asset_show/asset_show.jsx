import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';
import AssetNews from './asset_news';
import AssetChart from './asset_chart';
import AssetAbout from './asset_about';

class AssetShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { assets: {} };
  }

  componentDidMount() {
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
  }

  render () {
    // console.log(this.props);
    console.log(this.state);
    if(!this.state.assets[this.props.assetId]){
      return (<h1>wait</h1>);
    } else {
      const curAsset = this.state.assets[this.props.assetId];
      return (
        <div className="asset-show-main">
          <header className="asset-show-header">
            <h1>{curAsset.companyName}!</h1>
            <h3>symbol: {curAsset.symbol}</h3>
            <h2>${curAsset.iexRealtimePrice}</h2>
            <h3>{curAsset.change} ({this.state.assets[this.props.assetId].changePercent}%) Today</h3>
          </header>
          <AssetChart asset={curAsset} />
          <AssetAbout asset={curAsset} />
          <AssetNews asset={curAsset} />
        </div>
      );
    }
    // console.log(this.props.assets);
  }
}

export default AssetShow;
