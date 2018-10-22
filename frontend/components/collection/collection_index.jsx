import React from 'react';
import { getCollection } from '../../util/asset_api_util';
import WatchlistItem from '../dashboard/watchlist_show_item';

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { symbols: null };
  }

  componentDidMount() {
    this.props.fetchAllAssets().then((arg) => {
      this.setState({ assets: arg.assets });
    }).then(() => {
      return getCollection(this.props.match.params.tag);
    }).then((data) => {
      const mappedData = data.map((datum) => {
        return datum.symbol;
      });
      this.setState({ symbols: mappedData });
    });

  }

// TODO: Create fetchAssets action to properly link assets in collection
  render () {
    let collectionItems;
    if (Boolean(this.state.symbols)) {
      let assets = [];
      Object.values(this.state.assets).map((asset) => {
        if (this.state.symbols.includes(asset.symbol)) {
          assets.push(asset);
        }
      });
      collectionItems = assets.map((asset) => {
        return <WatchlistItem key={asset.id} asset={asset} />;
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
