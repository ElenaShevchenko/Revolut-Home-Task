import React, {Component} from 'react';
import './Card.scss';
import Exchange from "../Exchange";

class Card extends Component {
    // constructor(props){
    // super(props);
    // this.state = {};
    // }

    // componentWillMount(){}
    // componentDidMount(){}
    // componentWillUnmount(){}

    // componentWillReceiveProps(){}
    // shouldComponentUpdate(){}
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    render() {
        return (
            <section className="card-slider">
                <ul className="card-slider__slides">
                    {this.props.currencyList.map((currency) => {
                            const key = `${currency}${this.props.cardId}`;
                            return <li key={key} id={key} className="card-slider__item"><Exchange currency={currency}/></li>
                        })
                    }
                </ul>
                <div className="card-slider__control">
                    {this.props.currencyList.map((currency) => {
                        const key = `#${currency}${this.props.cardId}`;
                        return <a href={key}  key={key} className="card-slider__control-item">{currency}</a>
                    })
                    }
                </div>
            </section>
        );
    }
}

export default Card;
