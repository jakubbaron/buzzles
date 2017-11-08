import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
  render() {
    return (
      <div>
        <p>Hello from react</p>
      </div>
    )
  }
}

export default App;