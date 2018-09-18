import { RECEIVE_ASSET, RECEIVE_ASSETS } from '../actions/asset_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSET:{
      const data = merge({}, { id: action.asset.id }, action.asset);
      const newAsset = { [action.asset.id]: action.asset };
      return merge({}, state, newAsset);
    }
    case RECEIVE_ASSETS:{
      const newAssets = action.assets;
      return merge({}, state, newAssets);
    }
    default:
      return state;
  }
}
