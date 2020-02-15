import React from 'react';
import './App.scss';
import Card from "./components/Card";
import CardHeader from "./components/CardHeader";

const defaultCurrencyList = [
    {
        id: "usd",
        name: "USD",
        link: "#usd",
    },
    {
        id: "gbr",
        name: "GBR",
        link: "#gbr",
    },
    {
        id: "eur",
        name: "EUR",
        link: "#eur",
    }

];

function App() {

    return (
        <div className="App">
            <CardHeader/>
            <main>
                <Card currencyList={defaultCurrencyList} cardId = "top-card"/>
                <Card currencyList={defaultCurrencyList} cardId = "bottom-card"/>
            </main>
        </div>
    );
}

export default App;
