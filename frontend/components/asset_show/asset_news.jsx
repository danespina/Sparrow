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
      return (<li>
        <img src={window.flagURL} className="news-img" />
        <a href={news.url}>{news.headline}</a>
        <p>{news.summary}</p>
      </li>);
    });
    return(<ul>
      {newsList}
    </ul>);
  }
}

export default AssetNews;
