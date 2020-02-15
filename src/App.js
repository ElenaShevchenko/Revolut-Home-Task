import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.scss';
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";
import {AVAILABLE_CURRENCY_LIST} from "./constant";
import {fetchRates} from "./actions";
import {bindActionCreators} from "redux";

export class App extends Component {
    componentDidMount() {
        setInterval(this.getRates(), 10 * 1000);
    }

    getRates = () => {
        const {getRatesFunc, currencyFrom} = this.props;
        getRatesFunc(currencyFrom);
        return this.getRates;
    };

    render() {
        return (
            <div className="App">
                <CardHeader/>
                <main>
                    <Card currencyList={AVAILABLE_CURRENCY_LIST} cardId = "top-card"/>
                    <Card currencyList={AVAILABLE_CURRENCY_LIST} cardId = "bottom-card"/>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currencyFrom: state.user.currencyFrom,
});

const mapDispatchToProps = dispatch => ({
    getRatesFunc: bindActionCreators(fetchRates, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
