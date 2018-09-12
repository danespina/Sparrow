import { RECEIVE_ASSET } from '../actions/asset_actions';
import merge from 'lodash/merge';

export default function (state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ASSET:{
      const newAsset = { [action.asset.id]: action.asset };
      return merge({}, state, newAsset);
    }
    default:
      return state;
  }
}
