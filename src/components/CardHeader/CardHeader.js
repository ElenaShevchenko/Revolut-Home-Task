import React, { Component } from 'react';
import './CardHeader.scss';

class CardHeader extends Component {
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
        <header className="card-header">
            <button type="reset" className="btn">Cancel</button>
            <div className="card-header_rate">hdhdhdhhd</div>
            <button type="submit" className="btn">Exchange</button>
        </header>
    );
  }
}

export default CardHeader;
