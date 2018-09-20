import * as ApiUtil from '../util/watchlist_api_util';

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';

export const addItem = (item) => {
  return {
    type: ADD_TO_WATCHLIST,
    item,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    id,
  };
};

export const addToWatchlist = (id) => {
  return (dispatch) => {
    return ApiUtil.addToWatchlist(id).then((data) => {
      return dispatch(addItem(data));
    });
  };
};

export const removeFromWatchlist = (id) => {
  return (dispatch) => {
    return ApiUtil.removeFromWatchlist(id).then((data) => {
      return dispatch(removeItem(data));
    });
  };
};
