import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.headerText}</h3>
      </div>
    )
  }
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
}
export default Header;