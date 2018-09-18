import * as ApiUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';

export const receivePortfolio = (portfolio) => {
  return {
    type: RECEIVE_PORTFOLIO,
    portfolio,
  };
};

export const fetchPortfolio = (id) => {
  return (dispatch) => {
    return ApiUtil.fetchPortfolio(id).then((portfolio) => {
      return dispatch(receivePortfolio(portfolio));
    });
  };
};
