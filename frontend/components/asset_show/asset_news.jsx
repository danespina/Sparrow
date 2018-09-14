import React from 'react';
import { getExternalInfo } from '../../util/asset_api_util';

class AssetNews extends React.Component {
  constructor(props){
    super(props);
    this.state = { news: []};
  }
  componentDidMount(){
    getExternalInfo("news", this.props.asset).then((data) => {
      this.setState({ news: data });
    });
  }
  render () {
    const newsList = this.state.news.map( (news) => {
      let niceDate = new Date(news.datetime);
      return (<li key={news.datetime} className="news-item">
        <a href={news.url}>
          <div className="news-item-col1">
            <img src={window.flagURL} className="news-img" />
          </div>
          <div className="news-item-col2">
            <div className="news-item-header">
              <span className="bold">{news.source}</span>
              <span className="news-date">{niceDate.toDateString()}</span>
            </div>
            <div className="news-item-body">
              <h3 className="bold">{news.headline}</h3>
              <h3>{news.summary}</h3>
            </div>
          </div>
      </a>
      </li>);
    });
    return(
      <div className="asset-news">
        <div className="asset-header">
          <h2>News</h2>
        </div>
        <ul>
          {newsList}
        </ul>
      </div>);
  }
}

export default AssetNews;
