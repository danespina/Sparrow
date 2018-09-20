import React from 'react';
import WatchlistItem from './watchlist_show_item';


class WatchlistIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let watchItems;
    if(Boolean(this.props.watchlist)){
      watchItems = Object.values(this.props.watchlist).map((watch) => {
        return <WatchlistItem key={watch.id} asset={this.props.watchlist[watch.id]} />;
      });
    }
    return (
      <div className="watchlist-form">
        <div className="holdings-header bold">
          <h3>Watchlist</h3>
        </div>
        <ul>{watchItems}</ul>
      </div>
    );
  }
}

export default WatchlistIndex;
