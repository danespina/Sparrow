import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      const newPort = { [action.portfolio.id]: action.portfolio };
      return merge({}, state, newPort);
    default:
      return state;
  }
}
