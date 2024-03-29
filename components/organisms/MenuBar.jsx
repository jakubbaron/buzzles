import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import { withRouter } from 'react-router-dom';
import { white, white500, amber100, amber200, grey700 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedText: '/discover'
    };

  }
  select(index, text) {
    this.setState({ selectedIndex: index, selectedText: text });
    this.props.history.push(text);
  }

  render() {
    const profileIcon = <IconPermIdentity />;
    const nearbyIcon = <IconLocationOn />;
    const searchIcon = <IconSearch />;
    const bookmarkIcon = <IconBookmarkBorder />;
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
      <div className="navbar navbar-fixed-bottom">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Discover"
                icon={nearbyIcon}
                onClick={() => this.select(0, '/discover')}
              />
              <BottomNavigationItem
                label="Search"
                icon={searchIcon}
                onClick={() => this.select(1, '/search')}
              />
              <BottomNavigationItem
                label="Subscriptions"
                icon={bookmarkIcon}
                onClick={() => this.select(2, '/subscriptions')}
              />
              <BottomNavigationItem
                label="Profile"
                icon={profileIcon}
                onClick={() => this.select(3, '/profile')}
              />
            </BottomNavigation>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(MenuBar);