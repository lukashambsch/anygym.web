import React, { Component } from 'react'

class App extends Component {
  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App
