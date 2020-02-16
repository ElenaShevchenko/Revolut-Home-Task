import React from 'react';
import './ExchangeInput.scss';
import {formatToTwoDigitsNumber, getCurrencySymbol} from '../../helpers';

const ExchangeInput = ({ value, onChange, disabled, cardId, rates, currency, currencyFrom }) => {
    const rateForCurrencyFrom = rates && rates.rates ? rates.rates[currencyFrom] : 1 ;
    let course = cardId === 'bottom-card' ? `${getCurrencySymbol(currency)}1 = ${getCurrencySymbol(currencyFrom)}${rateForCurrencyFrom}` : '';

    return(
    <section className="exchange__action">
        <input
            className="exchange__input"
            type="text"
            placeholder="0"
            value={value === '' ? '' : formatToTwoDigitsNumber(value)}
            onChange={onChange}
            disabled={disabled}
        />

        <div className="exchange__course">
           {course}
        </div>
    </section>)
};



export default ExchangeInput;
