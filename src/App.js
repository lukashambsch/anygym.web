import { Component } from 'react'

class App extends Component {
  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return this.props.children
  }
}

export default App
