import { connect } from 'react-redux';
import HoldingsIndex from './holdings_show_index';

const mapStateToProps = (state) => {
  return {
    assets: state.entities.assets,
    portfolios: state.entities.portfolios,
  };
};

export default connect(mapStateToProps, null)(HoldingsIndex);
