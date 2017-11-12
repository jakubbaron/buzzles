import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import Image from '../atoms/Image.jsx'
import Header from '../atoms/Header.jsx'
import PropTypes from 'prop-types';

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
  headerText: PropTypes.object.isRequired,
  imageSource: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired
}
export default DetailedActivity;