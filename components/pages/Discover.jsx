import React, { Component } from 'react';
// import DetailedActivity from '../organisms/DetailedActivity.jsx';
import ListActivity from '../organisms/ListActivity.jsx';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';
import events from '../../mock_events.js';
/*
TODO:
-Make the contect only like 1100px wide, on the fullscreen it's obscure;
-Image in smaller screen becomes massive while it shouldn't
*/
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: events,
    };
  }

  render() {
    const discoverStyle = {
      backgroundColor: '#FFF8E1',
    }
    const subpageName = "Discover";
    return (
      <div className="padding">
        <div className="row" style={discoverStyle}>
          <HeaderSubpage text={subpageName}/>
          <ListActivity {...this.state} />
        </div>
      </div>
    )
  }
};

export default Discover;