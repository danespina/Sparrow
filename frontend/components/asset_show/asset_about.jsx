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

  toggleHide() {
    const hideThis = document.getElementById('sometimes-show');
    hideThis.classList.toggle('hidden');
    hideThis.classList.toggle('showing');
  }

  render () {
    let assetTags;
    if (this.state.about.tags){
      assetTags = this.state.about.tags.map((tag) => {
        return <button key={tag}>{tag}</button>;
      });
    }
    const moreAbout = [{"High Today": "/stats"}, {"Low Today": "/stats"}, {"Open Price": "/stats"}, {"Volume": "/stats"}, {"52 Week High": "/stats"}, {"52 Week Low": "/stats"},];
    const sometimesShow = moreAbout.map((el) => {
      return (<li>
        <div className="bold">{Object.keys(el)}</div>
        <div>
          {Object.values(el)}
        </div>
      </li>);
    });
    return (
      <div className="asset-about">
        <div className="about-span">
          <div className="about-header">
            <h2>About {this.props.asset.symbol}</h2>
            <button onClick={this.toggleHide}>ShowHide</button>
          </div>
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
            <li>
              <div className="bold">Employees</div>
              <div>
                To be seeded
              </div>
              </li>
            <li>
              <div className="bold">Headquarters</div>
              <div>
                To be seeded
              </div>
              </li>
            <li>
              <div className="bold">Founded</div>
              <div>
                To be seeded
              </div>
              </li>
            <li>
              <div className="bold">Market Cap</div>
              <div>
                {this.props.asset.marketCap}
              </div>
              </li>
            <li>
              <div className="bold">Price-Earnings Ratio</div>
              <div>
                {this.props.asset.peRatio}
              </div>
              </li>
            <li>
              <div className="bold">Dividend Yield</div>
              <div>
                To be pulled from /stats/
              </div>
              </li>
            <li>
              <div className="bold">Average Volume</div>
              <div>
                Loud
              </div>
              </li>
              <div id="sometimes-show" className="showing">
                {sometimesShow}
              </div>
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
