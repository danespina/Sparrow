import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetAbout extends React.Component {
  constructor(props){
    super(props);
    this.state = { about: {}, stats: {}, quote: {} };
  }

  componentDidMount(){
    getExternalInfo("company", this.props.asset).then((data) => {
      this.setState({ about: data });
    });
    getExternalInfo("stats", this.props.asset).then((data) => {
      this.setState({ stats: data });
    });
  }

  toggleHide() {
    const hideThis = document.getElementById('sometimes-show');
    hideThis.classList.toggle('hidden');
    hideThis.classList.toggle('showing');
  }

  formatNums(number) {
    const num = parseFloat(number);
    if(num > Math.pow(10, 9)){
      return (num / Math.pow(10, 9)).toFixed(2) + ' B';
    } else if (num > Math.pow(10, 6)) {
      return (num / Math.pow(10, 6)).toFixed(2) + ' M';
    } else if (num){
      return num.toFixed(2);
    } else {
      return num;
    }
  }

  render () {
    let assetTags;
    if (this.state.about.tags){
      assetTags = this.state.about.tags.map((tag) => {
        return <button key={tag}>{tag}</button>;
      });
    }
    const moreAbout = [{"High Today": `$ ${this.props.asset.high}`},
      {"Low Today": `$ ${this.props.asset.low}`},
      {"Open Price": `$ ${this.props.asset.open}`},
      {"Volume": this.formatNums(this.props.asset.iexVolume)},
      {"52 Week High": `$ ${this.state.stats.week52high}`},
      {"52 Week Low": `$ ${this.state.stats.week52low}`},];
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
          <div className="asset-header">
            <h2>About {this.props.asset.symbol}</h2>
            <button id="show-hide" onClick={this.toggleHide}>ShowHide</button>
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
                {this.formatNums(this.props.asset.marketCap)}
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
                {this.formatNums(this.state.stats.dividendYield)}
              </div>
              </li>
            <li>
              <div className="bold">Average Volume</div>
              <div>
                {this.formatNums(this.props.asset.avgTotalVolume)}
              </div>
              </li>
              <div id="sometimes-show" className="hidden">
                {sometimesShow}
              </div>
            </ul>
        </div>
        <div className="about-span">
          <div className="asset-header">
            <h2>Collection</h2>
          </div>
          <ul>{assetTags}</ul>
        </div>
      </div>
    );
  }
}

export default AssetAbout;
