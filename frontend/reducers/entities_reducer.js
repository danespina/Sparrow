import { combineReducers } from 'redux';
import users from './users_reducer';
import assets from './assets_reducer';

export default combineReducers({
    users,
    assets,
});
