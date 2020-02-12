import React, { Component } from 'react';
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
      <section className="slider">

          <div className="slider__slides">
            <div id="slide-1" className="slider__item">
                <Exchange/>
            </div>
            <div id="slide-2" className="slider__item">
              2
            </div>
            <div id="slide-3" className="slider__item">
              3
            </div>
          </div>
          <div className="slider__control">
              <a href="#slide-1" className="slider__control-item">usd</a>
              <a href="#slide-2" className="slider__control-item">eur</a>
              <a href="#slide-3" className="slider__control-item">gbr</a>
          </div>
      </section>
    );
  }
}

export default Card;
