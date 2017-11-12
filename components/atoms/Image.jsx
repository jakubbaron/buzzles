import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imageSource, imageStyle } = this.props;
    return (
      <img src={imageSource} className="img-responsive center-block" />
    )
  }
}

Image.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageStyle: PropTypes.object
};

export default Image;