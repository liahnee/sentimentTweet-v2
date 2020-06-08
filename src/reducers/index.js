import { combineReducers } from 'redux';
import manageCelebs from './manageCelebs';
import manageLogin from './manageLogin';
import manageLoading from './manageLoading';

export default combineReducers({
    manageCelebs,
    manageLogin,
    manageLoading
})