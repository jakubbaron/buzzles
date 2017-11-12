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
    const style = {
      position: 'relative',
      display: 'inline-block',
    }
    const headerStyle = {
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      right: '0px',
      backgroundColor: '#bebebe transparent',
    }
    return (
      <div style={style}>
        <Image imageSource={imageSource}/>
        <div style={headerStyle}>
          <Header text={headerText}/>
        </div>
      </div>
    )
  }
}

ImageWithCaption.propTypes = {
  imageSource: PropTypes.object.isRequired,
  imageStyle: PropTypes.object,
  headerText: PropTypes.object.isRequired
};

export default ImageWithCaption;