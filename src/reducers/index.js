import {combineReducers} from 'redux';

import rates from './rateReducer';
import user from './userReducer';


const rootReducer = combineReducers({
    rates,
    user,
});

export default rootReducer;
