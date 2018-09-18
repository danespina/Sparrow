import { connect } from 'react-redux';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import Dashboard from './placeholder_dashboard';

const mapStateToProps = (state) => {
  return {
    portfolioId: state.entities.users[state.session.currentUserId].portfolioId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPortfolio: (id) => {
      return dispatch(fetchPortfolio(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
