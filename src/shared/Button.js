// @flow
import React, { Component } from 'react';

import './static/Button.css';

class Button extends Component {
  props: {
    color?: string;
    className?: any;
    children?: any;
    clickHandler: Function;
  };

  render() {
    let className: string = 'button';

    if (this.props.color) {
      className = `${className} btn-${this.props.color}`;
    }

    if (this.props.className) {
      className = `${className} ${this.props.className}';'`
    }

    return (
      <button className={className} onClick={this.props.clickHandler}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
