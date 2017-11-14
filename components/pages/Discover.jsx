import React, { Component } from 'react';
// import DetailedActivity from '../organisms/DetailedActivity.jsx';
import ListActivity from '../organisms/ListActivity.jsx';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';
import events from '../../mock_events.js';

//TODO: format two paragraphs, they look like shiet
//TODO: make it tiles rather than grid, explore things by categories?

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: events,
    };
  }

  render() {
    const discoverStyle = {
      // backgroundColor: '#FFF8E1',
    }
    const subpageName = "Discover";
    return (
      <div className="padding">
        <div style={discoverStyle}>

          <HeaderSubpage text={subpageName} />
          <p>This weekend in your area...</p>
          <p><i>  Recommended for Donald:</i></p>
          <ListActivity {...this.state} />
        </div>
      </div>
    )
  }
};

export default Discover;