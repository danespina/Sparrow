import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/asset_actions';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import { addToWatchlist, removeFromWatchlist } from '../../actions/watchlist_actions';
import AssetShow from './asset_show';

const mapStateToProps = (state, ownProps) => {
  return {
    assetId: ownProps.match.params.id,
    assets: state.entities.assets,
    currentUserId: state.session.currentUserId,
    portfolio: state.entities.portfolios[state.entities.users[state.session.currentUserId].portfolioId],
    watchlist: state.entities.users[state.session.currentUserId].watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAsset: (id) => {
      return dispatch(fetchAsset(id));
    },
    fetchPortfolio: (id) => {
      return dispatch(fetchPortfolio(id));
    },
    addToWatchlist: (id) => {
      return dispatch(addToWatchlist(id));
    },
    removeFromWatchlist: (id) => {
      return dispatch(removeFromWatchlist(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetShow);
