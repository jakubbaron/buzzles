import React, { Component } from 'react';
import HeaderSubpage from '../atoms/HeaderSubpage.jsx';

export default class Subscriptions extends Component {
  render() {
    const subscriptionsStyle = {
      backgroundColor: '#FFF8E1',
    }
    const subpageName = "Subscriptions";
    return (
      <div className="padding">
        <div className="row" style={subscriptionsStyle}>
          <HeaderSubpage text={subpageName}/>
        </div>
      </div>
    )
  }
};