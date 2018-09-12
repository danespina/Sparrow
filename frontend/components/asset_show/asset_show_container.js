import { connect } from 'react-redux';
import { fetchAsset } from '../../actions/asset_actions';
import AssetShow from './asset_show';

const mapStateToProps = (state, ownProps) => {
  return {
    assetId: ownProps.match.params.id,
    assets: state.entities.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAsset: (id) => {
      return dispatch(fetchAsset(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetShow);
