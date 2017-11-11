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
    }
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
    return (
      <div>
        <footer>
          <MuiThemeProvider muiTheme={muiTheme}>
            <MenuBar />
          </MuiThemeProvider>
        </footer>
      </div>
    )
  }
}

export default App;