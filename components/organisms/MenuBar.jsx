import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconSearch from 'material-ui/svg-icons/action/search';
import IconBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import IconPermIdentity from 'material-ui/svg-icons/action/perm-identity';
class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };

  }
  select(index) {
    this.setState({ selectedIndex: index });
  }
  render() {
    const profileIcon = <IconPermIdentity />;
    const nearbyIcon = <IconLocationOn />;
    const searchIcon = <IconSearch />;
    const bookmarkIcon = <IconBookmarkBorder />;
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Discover"
            icon={nearbyIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Search"
            icon={searchIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Subscriptions"
            icon={bookmarkIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Profile"
            icon={profileIcon}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default MenuBar;