import React, { Component } from 'react';
import Description from '../atoms'
import Image from '../atoms'
import Header from '../atoms'

class DetailedActivity extends Component {
  render() {
    return (
      <div>
        <Header 
          {...this.props} />
        <Image
          {...this.props} />
        <Description
          {...this.props} />
      </div>
    )
  }
}

DetailedActivity.propTypes = {
  headerText: React.PropTypes.object.isRequired,
  imageSource: React.PropTypes.object.isRequired,
  description: React.PropTypes.object.isRequired
}
export default DetailedActivity;