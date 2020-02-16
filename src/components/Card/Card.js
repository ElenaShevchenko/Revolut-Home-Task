import React, {Component} from 'react';
import './Card.scss';
import CurrencyList from "../CurrencyList";
import { Select, MenuItem } from '@material-ui/core';
import ExchangeInput from "../ExchangeInput";
import {getCurrencySymbol} from "../../helpers";


class Card extends Component {

    render() {
        const {currency, handleCurrencyChange, cardId, balance, value, handleValueChange, currencyFrom, rates} = this.props;
        const currentAmount = cardId ==='top-card'? balance[currencyFrom] : balance[currency];
        return (
            <section className="card-slider">
                <div className="exchange">
                        <Select labelId="label" id="select" value={currency} onChange={handleCurrencyChange}>
                            {this.props.currencyList.map((currencyItem) => {
                                const key = `${currencyItem}${cardId}`;
                                return (
                                    <MenuItem value = {currencyItem} key={key}><CurrencyList currency={currencyItem}/></MenuItem>
                                )
                            })
                            }
                        </Select>
                        <div className="exchange__currency-wallet">
                            You have {getCurrencySymbol(currency)}{balance[currency]}
                        </div>
                </div>
                <ExchangeInput
                    value={value}
                    disabled={false}
                    onChange={handleValueChange}
                    cardId={cardId}
                    currency={currency}
                    currencyFrom={currencyFrom}
                    rates ={rates}
                    currentAmount={balance[currencyFrom]}/>
            </section>

        );
    }
}

export default Card;
