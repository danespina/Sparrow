import { connect } from 'react-redux';
import TradeForm from './trade_form';
import { makeTrade } from '../../actions/trade_actions';

const mapStateToProps = (state) => {
  return {
    test: 10,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    makeTrade: (trade) => {
      return dispatch(makeTrade(trade));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
