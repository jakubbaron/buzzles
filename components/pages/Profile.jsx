import React, { Component } from 'react';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginDialog from '../organisms/LoginDialog.jsx';

export default class Profile extends Component {
  render() {
    const DialogTheme = getMuiTheme({
      palette: {
        textColor: grey700,
        canvasColor: white500,
      },
      appBar: {
        height: 100,
      },
    });

    const text = "Please enter your credentials";
    const buttons = [
      { text: "Login" },
      { text: "Cancel" },
      { text: "Login" },
    ];

    return (
      <div>
        <header>

          <div className="buzzles-text-box">
            <h1>Buzzles!</h1>
            <div className="center-container">
              <MuiThemeProvider muiTheme={DialogTheme}>
                <LoginDialog buttons={buttons} text={text} />
              </MuiThemeProvider>
              <a href="#" className="btn btn-ghost">Sing Up!</a>
            </div>
          </div>
        </header>
      </div>
    )
  }
};