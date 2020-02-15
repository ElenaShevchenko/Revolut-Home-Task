import React, { Component } from 'react';
import './Exchange.scss';

class Exchange extends Component {
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
      <div className="exchange">
        <section className="exchange__currency">
            <div className="exchange__currency-name">
                {this.props.currency.name}
            </div>
            <div className="exchange__currency-wallet">
                You have $55.33
            </div>
        </section>
        <section className="exchange__action">
            <input className="exchange__input" type="text"/>

            <div className="exchange__course">
                $1 = h6
            </div>
        </section>
      </div>
    );
  }
}

export default Exchange;
