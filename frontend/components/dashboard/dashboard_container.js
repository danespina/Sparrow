import { connect } from 'react-redux';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import { fetchAssets } from '../../actions/asset_actions';
import Dashboard from './placeholder_dashboard';

const mapStateToProps = (state) => {
  return {
    portfolioId: state.entities.users[state.session.currentUserId].portfolioId,
    assets: state.entities.assets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: (id) => {
      return dispatch(fetchPortfolio(id));
    },
    fetchAssets: () => {
      return dispatch(fetchAssets());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
