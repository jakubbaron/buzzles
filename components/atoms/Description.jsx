import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const descriptionStyle = {
      lineHeight: 1.40,
      fontWeight: 300,
      textAlign: 'justify',
      padding: 10,
    }
    return (
      <div style={descriptionStyle}>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Description.propTypes = {
  text: PropTypes.string.isRequired
}

export default Description;