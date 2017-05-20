// @flow
import React, { Component } from 'react';

import './static/PageHeader.css';

class PageHeader extends Component {
  props: {
    title: string;
  };

  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

export default PageHeader;
