import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.imgSource}/>
      </div>
    )
  }
}

Image.propTypes = {
  imgSource: PropTypes.string.isRequired,
};

export default Image;