import React, { Component } from 'react';
import Button from './atoms/Button.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      buttonText: "abcd"
    }
  }
  alerting(e) {
    alert(e + "Clicked woah");
  }
  render() {
    return (
      <div>
        <p>Hello from react</p>
        <Button onClick={this.alerting} {...this.state}/>
      </div>
    )
  }
}

export default App;