import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { imageSource } = this.props;
    const imageStyle = {
      margin: '10px',
    }
    return (
      <img src={imageSource} className="img-responsive center" style={imageStyle} />
    )
  }
}

Image.propTypes = {
  imageSource: PropTypes.string.isRequired,
};

export default Image;