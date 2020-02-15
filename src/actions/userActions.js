import * as ActionTypes from './actionTypes';
import {fetchRates} from "../actions";

export const setValueFrom = valueFrom => (dispatch, getState) => {
    return dispatch({
        type: ActionTypes.SET_VALUE_FROM,
        valueFrom,
        rates: getState().rates,
    });
};

export const setValueTo = valueTo => (dispatch, getState) => {
    return dispatch({
        type: ActionTypes.SET_VALUE_TO,
        valueTo,
        rates: getState().rates,
    });
};

export const setCurrencyFrom = currencyFrom => (dispatch, getState) => {
    return dispatch(fetchRates(currencyFrom))
        .then(() => {
            return dispatch({
                type: ActionTypes.SET_CURRENCY_FROM,
                currencyFrom,
                rates: getState().rates,
            });
        });
};

export const setCurrencyTo = currencyTo => (dispatch, getState) => {
    const currencyFrom =  getState().currencyFrom === currencyTo ?
        getState().currencyTo :
        getState().currencyFrom;

    return dispatch(fetchRates(currencyFrom))
        .then(() => {
            return dispatch({
                type: ActionTypes.SET_CURRENCY_TO,
                currencyFrom,
                currencyTo,
                rates: getState().rates,
            });
        });
};

export const exchange = () => (dispatch, getState) => {
    const state = getState();

    dispatch({
        type: ActionTypes.EXCHANGE_CURRENCY,
        active: state.active,
        rates: state.rates
    });

    dispatch(setValueFrom(''));
};
