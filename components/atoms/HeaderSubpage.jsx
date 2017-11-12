import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderSubpage extends Component {
  render() {
    const { text } = this.props;
    const HeaderSubpageStyle = {

      textAlign: 'center',
      fontSize: '300%',
      fontWeight: '500',
      color: '#00ACC1',
      textTransform: 'uppercase',
    }
    return (
      <div style={HeaderSubpageStyle}>
        <p>{text}</p>
      </div>
    )
  }
}

HeaderSubpage.propTypes = {
  text: PropTypes.string.isRequired,
}
export default HeaderSubpage;