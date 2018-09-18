import * as ApiUtil from '../util/trade_api_util';

export const makeTrade = (trade) => {
  return (dispatch) => {
    return ApiUtil.makeTrade(trade).then((data) => {
      console.log(data);
    });
  };
};
