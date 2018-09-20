import { connect } from 'react-redux';
import TradeForm from './trade_form';
import { makeTrade } from '../../actions/trade_actions';
import { fetchPortfolio } from '../../actions/portfolio_actions';

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.currentUserId],
    portfolio: state.entities.portfolios[state.entities.users[state.session.currentUserId].portfolioId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeTrade: (trade) => {
      return dispatch(makeTrade(trade));
    },
    fetchPortfolio: (id) => {
      return dispatch(fetchPortfolio(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
