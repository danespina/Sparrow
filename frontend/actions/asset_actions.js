import * as ApiUtil from '../util/asset_api_util';

export const RECEIVE_ASSET = 'RECEIVE_ASSET';

export const receiveAsset = (asset) => {
  return {
    type: RECEIVE_ASSET,
    asset,
  };
};

export const fetchAsset = (id) => {
  return (dispatch) => {
    return ApiUtil.fetchAsset(id).then((asset) => {
      return dispatch(receiveAsset(asset));
    });
  };
};
