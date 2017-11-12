import React, { Component } from 'react';
import Header from '../atoms/Header.jsx';
import Image from '../atoms/Image.jsx';

import PropTypes from 'prop-types';

class ImageWithCaption extends Component {
  render() {
    const { 
      imageSource,
      imageStyle,
      headerText 
    } = this.props;
    const headerStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      right: '0px',
      backgroundColor: '#bebebe transparent',
    }
    return (
      <div>
        <Image imageSource={imageSource}/>
        <div style={headerStyle}>
          <Header text={headerText}/>
        </div>
      </div>
    )
  }
}

ImageWithCaption.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageStyle: PropTypes.object,
  headerText: PropTypes.string.isRequired
};

export default ImageWithCaption;