import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

Description.propTypes = {
  text: PropTypes.string.isRequired
}

export default Description;