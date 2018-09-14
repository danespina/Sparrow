import * as ApiUtil from '../util/asset_api_util';

export const RECEIVE_ASSET = 'RECEIVE_ASSET';
export const RECEIVE_ASSETS = 'RECEIVE_ASSETS';

export const receiveAsset = (asset) => {
  return {
    type: RECEIVE_ASSET,
    asset,
  };
};

export const receiveAssets = (assets) => {
  return {
    type: RECEIVE_ASSETS,
    assets,
  };
};

export const fetchAsset = (id) => {
  return (dispatch) => {
    return ApiUtil.fetchAsset(id).then((asset) => {
      return dispatch(receiveAsset(asset));
    });
  };
};

export const fetchAssets = () => {
  return (dispatch) => {
    return ApiUtil.fetchAssets().then((assets) => {
      return dispatch(receiveAssets(assets));
    });
  };
};
