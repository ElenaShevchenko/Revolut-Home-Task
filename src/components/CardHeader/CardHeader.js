import React from 'react';
import './CardHeader.scss';
import { getCurrencySymbol} from '../../helpers';

const CardHeader = ({ rates, currencyTo, currencyFrom, onExchange }) => {
    let course = `${getCurrencySymbol(currencyFrom)}1 = ${getCurrencySymbol(currencyTo)}${rates[currencyTo]}`;

    return(
        <header className="card-header">
            <button type="button" className="btn">Cancel</button>
            <div className="card-header_rate">{course}</div>
            <button
                type="submit"
                className="btn"
                onClick={onExchange}>Exchange</button>
        </header>
    )
};
export default CardHeader;
