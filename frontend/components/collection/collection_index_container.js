import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchAllAssets } from '../../actions/asset_actions';
import CollectionIndex from './collection_index';

const mapStateToProps = (state) => {
  return {
    assets: state.entities.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllAssets: () => {
      return dispatch(fetchAllAssets());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CollectionIndex));
