import React, { Component } from 'react';
import ListActivity from '../organisms/ListActivity.jsx';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';
import TextField from 'material-ui/TextField';
import events from '../../mock_events.js';
//TODO: create search button
//TODO: create filter button
//TODO: add map view
//TODO: create filter popup window
//TODO: search -> dropdown?
//TODO: query(filtering) should be on the server side, only sorting here possibly
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: events
    }
  }
  render() {
    const searchStyle = {
      backgroundColor: '#FFF8E1',
    }
    const subpageName = "Search";
    const searchFieldStyle = {
      textAlign: 'center',
    };
    return (
      <div className="padding">
        <div style={searchStyle}>
          <HeaderSubpage text={subpageName} />
          <div style={searchFieldStyle}>
            <TextField
              floatingLabelText="Search"
              hintText=""
            />
          </div>
          <ListActivity {...this.state} />
        </div>
      </div>
    )
  }
};