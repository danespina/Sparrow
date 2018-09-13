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
      return (<li className="news-item">
        <a href={news.url}>
          <div className="news-item-col1">
            <img src={window.flagURL} className="news-img" />
          </div>
          <div className="news-item-col2">
            {news.source}
            {niceDate.toDateString()}
            <h3>{news.headline}</h3>
            <p>{news.summary}</p>
          </div>
      </a>
      </li>);
    });
    return(
      <div className="asset-news">
        <h2>News</h2>
        <ul>
          {newsList}
        </ul>
      </div>);
  }
}

export default AssetNews;
