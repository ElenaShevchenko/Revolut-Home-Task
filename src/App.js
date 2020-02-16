import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import {AVAILABLE_CURRENCY_LIST} from "./constant";
import {exchange, fetchRates, setCurrencyFrom, setCurrencyTo, setValueFrom, setValueTo} from "./actions";
import {bindActionCreators} from "redux";
import {formatInputValueToTwoDigitsNumber} from "./helpers";

export class App extends Component {
    componentDidMount() {
        setInterval(this.getRates(), 10 * 1000);
    }

    getRates = () => {
        const {getRatesFunc, currencyFrom} = this.props;
        getRatesFunc(currencyFrom);
        return this.getRates;
    };

    handleFromValueChange = event => this.props.setValueFromFunc(formatInputValueToTwoDigitsNumber(event.target.value));

    handleToValueChange = event => this.props.setValueToFunc(
        formatInputValueToTwoDigitsNumber(event.target.value)
    );

    handleFromCurrencyChange = (event, value) => this.props.setCurrencyFromFunc(value.props.value);

    handleToCurrencyChange = (event, value) => this.props.setCurrencyToFunc(value.props.value);

    render() {
        const {currencyFrom, valueFrom, currencyTo, valueTo, wallet, rates} = this.props;
        console.log(rates, 8888888888);
        return (
            <div className="App">
                <CardHeader/>
                <main>
                    <Card
                        currencyList={AVAILABLE_CURRENCY_LIST}
                        cardId = "top-card"
                        balance={wallet}
                        currency={currencyFrom}
                        value={valueFrom}
                        handleCurrencyChange={this.handleFromCurrencyChange}
                        handleValueChange={this.handleFromValueChange}
                       />
                    <Card
                        currencyList={AVAILABLE_CURRENCY_LIST}
                        cardId = "bottom-card"
                        balance={wallet}
                        currency={currencyTo}
                        currencyFrom = {currencyFrom}
                        value={valueTo}
                        rates={rates}
                        handleCurrencyChange={this.handleToCurrencyChange}
                        handleValueChange={this.handleToValueChange}
                        />
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currencyFrom: state.user.currencyFrom,
    currencyTo: state.user.currencyTo,
    valueFrom: state.user.valueFrom,
    valueTo: state.user.valueTo,
    wallet: state.user.wallet,
    rates: state.user.rates,
});

const mapDispatchToProps = dispatch => ({
    getRatesFunc: bindActionCreators(fetchRates, dispatch),
    exchangeFunc: bindActionCreators(exchange, dispatch),
    setCurrencyFromFunc: bindActionCreators(setCurrencyFrom, dispatch),
    setValueFromFunc: bindActionCreators(setValueFrom, dispatch),
    setCurrencyToFunc: bindActionCreators(setCurrencyTo, dispatch),
    setValueToFunc: bindActionCreators(setValueTo, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
