import { connect } from 'react-redux';
import WatchlistIndex from './watchlist_show_index';

const mapStateToProps = (state) => {
  return {
    assets: state.entities.assets,
    watchlist: state.entities.users[state.session.currentUserId].watchlist,
  };
};

export default connect(mapStateToProps, null)(WatchlistIndex);
