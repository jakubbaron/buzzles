import React, { Component } from 'react';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginDialog from '../organisms/LoginDialog.jsx';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';

/* TODOs
-investigate why this page is wider than other views
-create similar form for SignUp as for Login
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

    const text = "Please enter your credentials";
    const buttons = [
      { text: "Login" },
      { text: "Cancel" },
      { text: "Login" },
    ];
    const subpageName = "Profile";
    return (
      <div>
        <header>
        <HeaderSubpage text={subpageName}/>          
          <div className="buzzles-text-box">
            <h1>Buzzles!</h1>
              <MuiThemeProvider muiTheme={DialogTheme}>
                <LoginDialog buttons={buttons} text={text} />
              </MuiThemeProvider>
              <a href="#" className="btn btn-ghost">Sing Up!</a>
          </div>
        </header>
      </div>
    )
  }
};