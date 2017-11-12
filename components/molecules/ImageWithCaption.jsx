import React, { Component } from 'react';
import Header from '../atoms/Header.jsx';
import Image from '../atoms/Image.jsx';

import PropTypes from 'prop-types';
/*
TODO: fix caption on smaller screen, it sucks ballzs
//Temp fix applied, but needs better solution
*/
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
      marginLeft: '15px',
      textAlign: 'center',
      backgroundColor: '#bebebe transparent',
    }


    return (
      <div>
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