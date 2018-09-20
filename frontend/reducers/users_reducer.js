import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:{
      const newState = merge({}, { [action.user.id]: action.user });
      return newState;
    }
    case ADD_TO_WATCHLIST:{
      const userId = Object.keys(state)[0];
      const updatedWatchlist = merge({},
        state[userId].watchlist,
        { [action.item.id]: action.item }
      );
      const updatedUser = merge({},
        state[userId],
        { watchlist: updatedWatchlist }
      );
      return merge({}, { [userId]: updatedUser });
    }
    case REMOVE_FROM_WATCHLIST:{
      const userId = Object.keys(state)[0];
      const updatedWatchlist = merge({}, state[userId].watchlist);
      delete updatedWatchlist[action.id.id];
      const updatedUser = merge({}, state[userId]);
      updatedUser.watchlist = updatedWatchlist;
      return { [userId]: updatedUser };
    }
    default:
      return state;
  }
}
