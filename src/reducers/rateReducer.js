import initialState from './initial.state';
import * as ActionTypes from '../actions/actionTypes';

export default function rateReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_CURRENCY_RATES_FAILED:
            return Object.assign({}, state, {errors: action.error});
        case ActionTypes.FETCH_CURRENCY_RATES_LOADING:
            return Object.assign({}, state, {loading: action.loading});
        case ActionTypes.FETCH_CURRENCY_RATES_SUCCESS:
            return Object.assign({}, state, {rates: action.rates});
        default:
            return state;
    }
}
