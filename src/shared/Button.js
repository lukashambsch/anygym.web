// @flow
import React, { Component } from 'react';

import './static/Button.css';

class Button extends Component {
  props: {
    color?: string;
    children?: any;
    clickHandler: Function;
  };

  render() {
    let className: string = 'btn';

    if (this.props.color) {
      className = `${className} btn-${this.props.color}`;
    }

    return (
      <button className={className} onClick={this.props.clickHandler}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
