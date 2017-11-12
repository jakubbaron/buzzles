import React, { Component } from 'react';
import MenuBar from './organisms/MenuBar.jsx';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Discover from './pages/Discover.jsx';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import Subscriptions from './pages/Subscriptions.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
      <Router>
          <div className="container-fluid container-full">
          <MuiThemeProvider muiTheme={muiTheme}>
            <MenuBar />
          </MuiThemeProvider>
          <div>
            <Route exact path="/" component={Discover} />
            <Route path="/discover" component={Discover} />
            <Route path="/search" component={Search} />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </Router >
    );
  }
}

export default App;