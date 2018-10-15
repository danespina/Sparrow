import React from 'react';
import { getCollection } from '../../util/asset_api_util';
import WatchlistItem from '../dashboard/watchlist_show_item';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collection: null };
  }

  componentDidMount() {
    getCollection(this.props.match.params.tag).then((data) => {
      this.setState({ collection: data });
    });
  }

// TODO: Create fetchAssets action to properly link assets in collection
  render () {
    let collectionItems;
    if (Boolean(this.state.collection)) {
      collectionItems = this.state.collection.map((asset) => {
        return <WatchlistItem key={asset.symbol} asset={asset} />;
      });
    }
    return (
      <div className="collection-form">
        <div className="holdings-header bold">
          <h3>Collection</h3>
        </div>
        <ul>{collectionItems}</ul>
      </div>
    );
  }
}

export default CollectionIndex;
