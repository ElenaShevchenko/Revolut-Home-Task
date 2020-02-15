import * as ActionTypes from './actionTypes';
import axios from 'axios';
import {AVAILABLE_CURRENCY_LIST, BASE_URL, APP_ID} from "../constant";


axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 100000;


export const fetchRatesFromApi = (base, currencies) =>
    axios.get(`${BASE_URL}${APP_ID}&base=${base}&symbols=${currencies}`)
        .then(res => res.data);

export const setFetchedRates= rates => ({
    type: ActionTypes.FETCH_CURRENCY_RATES_SUCCESS,
    rates
});

export const setFetchRatesLoading = isLoading => ({
    type: ActionTypes.FETCH_CURRENCY_RATES_LOADING,
    isLoading
});

export const setFetchRatesError = error => ({
    type: ActionTypes.FETCH_CURRENCY_RATES_FAILED,
    error
});

export const fetchRates = (currencyFrom) => dispatch => {
    const currencies = AVAILABLE_CURRENCY_LIST.filter(currency => currency !== currencyFrom).join();
    dispatch(setFetchRatesLoading(true));
    dispatch(setFetchRatesError(null));


    return fetchRatesFromApi(currencyFrom, currencies)
        .then(rates => {
            dispatch(setFetchRatesLoading(false));
            dispatch(setFetchedRates(rates));
        })
        .catch(error => {
            dispatch(setFetchRatesLoading(false));
            dispatch(setFetchRatesError(error.message));
        });
};






