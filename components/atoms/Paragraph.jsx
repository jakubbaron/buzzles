import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paragraph extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Paragraph;