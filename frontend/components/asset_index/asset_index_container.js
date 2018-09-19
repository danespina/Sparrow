import { connect } from 'react-redux';
import { fetchAllAssets } from '../../actions/asset_actions';
import AssetIndex from './asset_index';

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

export default connect(mapStateToProps, mapDispatchToProps)(AssetIndex);
