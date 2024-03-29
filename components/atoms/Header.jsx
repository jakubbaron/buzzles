import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { text } = this.props;
    const headerStyle = {
      textAlign: 'center',
      fontSize: '175%',
      fontWeight: '500',
    }
    return (
      <div style={headerStyle}>
        <p>{text}</p>
      </div>
    )
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
}
export default Header;