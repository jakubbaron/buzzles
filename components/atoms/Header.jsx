import React, { Component } from 'react';

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
  headerText: React.PropTypes.object.isRequired
}
export default Header;