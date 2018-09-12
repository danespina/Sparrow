import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default function (state = [], action) {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:{
      const newState = state.concat(action.errors);
      return newState;
    }
    default:
      return state;
  }
}
