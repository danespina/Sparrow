import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetAbout extends React.Component {
  constructor(props){
    super(props);
    this.state = { about: {} };
  }

  componentDidMount(){
    getExternalInfo("company", this.props.asset).then((data) => {
      this.setState({ about: data });
    });
  }

  render () {
    let assetTags;
    if (this.state.about.tags){
      assetTags = this.state.about.tags.map((tag) => {
        return <button>{tag}</button>;
      });
    }
    return (
      <div className="asset-about">
        <h2>About {this.props.asset.symbol}</h2>
        <ul>{assetTags}</ul>
        <p>{this.state.about.description}</p>
        <ul className="asset-about-detail">
          <li>
            <h4>CEO</h4> {this.state.about.CEO}
          </li>
        </ul>
      </div>
    );
  }
}

export default AssetAbout;
