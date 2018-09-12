import React from 'react';
import { getQuote } from '../../util/asset_api_util';

class AssetShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { assets: {} };
  }

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.id).then(
      (arg) => {
        this.setState({ assets: {[arg.asset.id]: arg.asset } });
      }).then(
        () => {
          return getQuote(this.state.assets[this.props.match.params.id]);
        }
      ).then((data) => {
        this.setState({ assets: {[this.props.match.params.id]: data}});
      });
    // console.log(this.props.assets);
    // this.setState({assets: { 1: this.props.assets[1] }});
  }

  componentDidUpdate() {
    // this.setState({ assets: { this.props.assets }});
  }

  render () {
    // console.log(this.props);
    console.log(this.state);
    if(!this.state.assets[this.props.assetId]){
      return (<h1>wait</h1>);
    } else {
      return (
        <div>
          <h1>{this.state.assets[this.props.assetId].companyName}!</h1>
          <h2>symbol: {this.state.assets[this.props.assetId].symbol}</h2>
          <h3>current: {this.state.assets[this.props.assetId].iexRealtimePrice}</h3>
          <h3>open: {this.state.assets[this.props.assetId].open}</h3>
          <h3>close: {this.state.assets[this.props.assetId].close}</h3>
        </div>
      );
    }
    // console.log(this.props.assets);
  }
}

export default AssetShow;
