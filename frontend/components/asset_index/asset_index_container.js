import { connect } from 'react-redux';
import { fetchAssets } from '../../actions/asset_actions';
import AssetIndex from './asset_index';

const mapStateToProps = (state) => {
  return {
    assets: state.entities.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAssets: () => {
      return dispatch(fetchAssets());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetIndex);
