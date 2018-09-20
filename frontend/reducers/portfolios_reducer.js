import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';
import { RECEIVE_TRADE } from '../actions/trade_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return { [action.portfolio.id]: action.portfolio };
    case RECEIVE_TRADE:{
      const portId = Object.keys(state)[0];
      let updatedHoldings;
      if (state[portId].holdings[action.trade.asset_id]) {
        const oldPrice = state[portId].holdings[action.trade.asset_id].position * state[portId].holdings[action.trade.asset_id].avg_price;
        const newPos = state[portId].holdings[action.trade.asset_id].position + action.trade.position;
        const newPrice = oldPrice + (action.trade.position * action.trade.avg_price);

        updatedHoldings = merge({},
          state[portId].holdings,
          { [action.trade.asset_id]: {
            asset_id: action.trade.asset_id,
            position: newPos,
            avg_price: (newPrice / newPos),
          }}
        );
      } else {
        updatedHoldings = merge({},
          state[portId].holdings,
          { [action.trade.asset_id]: {
            asset_id: action.trade.asset_id,
            position: action.trade.position,
            avg_price: action.trade.avg_price,
          }}
        );
      }
      const newBuyingPower = state[portId].buying_power - (action.trade.position * action.trade.avg_price);
      const updatedPortfolio = merge({}, state[portId], updatedHoldings);
      return merge({}, { [portId]: updatedPortfolio });
    }
    default:
      return state;
  }
}
