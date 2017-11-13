import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imageStyle, imageSource } = this.props;
    return (
      <img src={imageSource} className="img-responsive center" style={imageStyle} />
    )
  }
}

Image.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageStyle: PropTypes.object
};

export default Image;