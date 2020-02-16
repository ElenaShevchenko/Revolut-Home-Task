import initialState from './initial.state';
import * as ActionTypes from '../actions/actionTypes';

const setValueFrom = (state, action) => {
    const {currencyTo} = state;
    const {valueFrom, rates} = action;
    const valueTo = valueFrom * rates.rates[currencyTo];

    return Object.assign({}, state, {
        valueFrom: action.valueFrom,
        valueTo: valueTo
    });
};

const setValueTo = (state, action) => {
    const {valueTo, rates} = action;
    const {currencyTo} = state;
    const valueFrom = valueTo / rates.rates[currencyTo];

    return Object.assign({}, state, {
        valueTo: action.valueTo,
        valueFrom: valueFrom
    });
};

const setCurrencyFrom = (state, action) => {
    const {valueFrom, currencyFrom, rates} = state;
    const currencyTo = state.currencyTo === currencyFrom ?
        state.currencyFrom :
        state.currencyTo;

    const valueTo = valueFrom * rates.rates[currencyTo];

    return Object.assign({}, state, {
        currencyFrom: action.currencyFrom,
        valueTo: valueTo,
        currencyTo: currencyTo
    });
};

const setCurrencyTo = (state, action) => {
    const {valueFrom, currencyFrom, rates, currencyTo} = state;
    const valueTo = valueFrom * rates.rates[currencyTo];

    return Object.assign({}, state, {
        currencyTo: action.currencyTo,
        valueTo: valueTo,
        currencyFrom
    });
};

const exchange =  (state, action) => {
    const {active, rates} = action;
    const exchangedValue = active.valueFrom * rates.rates[active.currencyTo];

    return Object.assign({}, state, {
        [active.currencyFrom]: state[active.currencyFrom] - active.valueFrom,
        [active.currencyTo]: state[active.currencyTo] + exchangedValue,
        lastExchange: {
            valueFrom: active.valueFrom,
            valueTo: exchangedValue,
            currencyFrom: active.currencyFrom,
            currencyTo: active.currencyTo
        }
    });
};

export default function userReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
        case ActionTypes.SET_VALUE_TO:
            return setValueTo(state, action);
        case ActionTypes.SET_VALUE_FROM:
            return setValueFrom(state, action);
        case ActionTypes.SET_CURRENCY_FROM:
            return setCurrencyFrom(state, action);
        case ActionTypes.SET_CURRENCY_TO:
            return setCurrencyTo(state, action);
        case ActionTypes.EXCHANGE_CURRENCY:
            return exchange(state, action);
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
