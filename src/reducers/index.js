import { combineReducers } from 'redux';
import manageCelebs from './manageCelebs';
import manageLogin from './manageLogin';

export default combineReducers({
    manageCelebs,
    manageLogin
})