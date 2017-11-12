import React, { Component } from 'react';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';
export default class Search extends Component {
  render() {
    const searchStyle = {
      backgroundColor: '#FFF8E1',
    }
    const subpageName = "Search";
    return (
      <div className="padding">
        <div className="row" style={searchStyle}>
          <HeaderSubpage text={subpageName}/>
        </div>
      </div>
    )
  }
};