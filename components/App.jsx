import React, { Component } from 'react';
import MenuBar from './organisms/MenuBar.jsx';
import { white, white500, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LoginDialog from './organisms/LoginDialog.jsx';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import IconPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import {
  BrowserRouter as Router,
  Route,
  Link
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
    const profileIcon = <IconPermIdentity />;
    const nearbyIcon = <IconLocationOn />;
    const searchIcon = <IconSearch />;
    const bookmarkIcon = <IconBookmarkBorder />;
    return (
      <Router>
        <div>
          <footer>
            <MuiThemeProvider muiTheme={muiTheme}>
              <MenuBar />
            </MuiThemeProvider>
          </footer>
          <Route exact path="/" component={Discover} />
          <Route path="/discover" component={Discover} />
          <Route path="/search" component={Search} />
          <Route path="/subscriptions" component={Subscriptions} />
          <Route path="/profile" component={Profile} />
        </div>

      </Router >
    );
  }
}

export default App;