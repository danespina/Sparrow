import { connect } from 'react-redux';
import HoldingsIndex from './holdings_show_index';

const mapStateToProps = (state) => {
  const portId = state.entities.users[state.session.currentUserId].portfolioId;
  return {
    assets: state.entities.assets,
    portfolio: state.entities.portfolios[portId],
  };
};

export default connect(mapStateToProps, null)(HoldingsIndex);
