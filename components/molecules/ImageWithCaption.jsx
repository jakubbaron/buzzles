import React, { Component } from 'react';
import Header from '../atoms/Header.jsx';
import Image from '../atoms/Image.jsx';

import PropTypes from 'prop-types';

//TODO: fix caption on smaller screen, it sucks ballzs
//Temp fix applied, but needs better solution
//TODO: break text if it's longer than one line
//TODO: display max 2 lines of header on image

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
      textAlign: 'center',
      backgroundColor: '#bebebe transparent',
    }
    const imageWithCaptionStyle = {
      margin: '5px'
    }

    return (
      <div style={imageWithCaptionStyle}>
        <Image imageSource={imageSource} style={imageSource} />
        <div style={headerStyle}>
          <p >{headerText} </p>
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