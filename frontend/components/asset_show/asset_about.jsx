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
        return <button key={tag}>{tag}</button>;
      });
    }
    return (
      <div className="asset-about">
        <div className="about-span">
          <h2>About {this.props.asset.symbol}</h2>
          <h3>{this.state.about.description}</h3>
          <ul className="asset-about-detail">
            <li>
              <div className="bold">CEO</div>
              <div>
                <a href={`https://www.google.com/search?q=${this.state.about.CEO} ${this.state.about.companyName}`}>
                  {this.state.about.CEO}
                </a>
              </div>
              </li>
            </ul>
        </div>
        <div className="about-span">
          <h2>Collection</h2>
          <ul>{assetTags}</ul>
        </div>
      </div>
    );
  }
}

export default AssetAbout;
