import React, { Component } from 'react';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginDialog from '../organisms/LoginDialog.jsx';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';

/* TODO: create similar form for SignUp as for Login
 */
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

    const loginText = "Please enter your credentials";
    const loginButtons = [
      { text: "Login" },
      { text: "Cancel" },
    ];
    const signupText = "Please enter your details";
    const signupButtons = [
      { text: "Sign Up!" },
      { text: "Cancel" },
    ];
    const loginClass = "btn-full";
    const signupClass = "btn-ghost";
    const subpageName = "Profile";
    return (
      <div>
        <header>
          <HeaderSubpage text={subpageName} />
          <div className="buzzles-text-box">
            <h1>Buzzles!</h1>
            <MuiThemeProvider muiTheme={DialogTheme}>
              <LoginDialog buttons={loginButtons} mainButtonClass={loginClass} text={loginText} />
              <LoginDialog buttons={signupButtons} mainButtonClass={signupClass} text={signupText} />
            </MuiThemeProvider>
          </div>
        </header>
      </div>
    )
  }
};