import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return { [action.portfolio.id]: action.portfolio};
    default:
      return state;
  }
}
