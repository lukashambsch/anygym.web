// @flow
import React, { Component } from 'react';

class PageBody extends Component {
  props: {
    children?: any;
  };

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

export default PageBody;
