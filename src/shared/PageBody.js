// @flow
import React, { Component } from 'react';

import './static/PageBody.css';

class PageBody extends Component {
  props: {
    children?: any;
  };

  render() {
    return (
      <div className="row">
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default PageBody;
