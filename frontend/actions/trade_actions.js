import * as ApiUtil from '../util/trade_api_util';

export const RECEIVE_TRADE = 'RECEIVE_TRADE';

export const receiveTrade = (trade) => {
  return {
    type: RECEIVE_TRADE,
    trade,
  };
};

export const makeTrade = (trade) => {
  return (dispatch) => {
    return ApiUtil.makeTrade(trade).then((data) => {
      return dispatch(receiveTrade(data));
    });
  };
};
