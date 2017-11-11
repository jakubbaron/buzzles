import React, { Component } from 'react';
import MenuBar from './organisms/MenuBar.jsx';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginDialog from './organisms/LoginDialog.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      buttonText: "abcd"
    }
  }
  alerting(e) {
    alert("clicked!");
  }
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: grey700,
        canvasColor: amber200,
      },
      appBar: {
        height: 100,
      },
    });
    const DialogTheme = getMuiTheme({
      palette: {
        textColor: grey700,
        canvasColor: white500,
      },
      appBar: {
        height: 100,
      },
    });
    const buttons = [
      { text: "Login" },
      { text: "Cancel" },
      { text: "Login" },
    ]
    const text = "Please enter your credentials";
    return (
      <div>
        <header>
          <div className="buzzles-text-box">
            <h1>Buzzles!</h1>
            <MuiThemeProvider muiTheme={DialogTheme}>
              <LoginDialog buttons={buttons} text={text} />
            </MuiThemeProvider>
            <a href="#" className="btn btn-ghost">Sing Up!</a>
          </div>
        </header>
        <footer>
          <MuiThemeProvider muiTheme={muiTheme}>
            <MenuBar />
          </MuiThemeProvider>
        </footer>

        {/* <footer>
        <nav>
          <div className="row">
            <ul className="main-nav">
              <li>
                <a href="#">
                  Discover</a>
              </li>
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer> */}
      </div>
    )
  }
}

export default App;