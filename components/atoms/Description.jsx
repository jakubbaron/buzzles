import React, { Component } from 'react';

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
  text: React.PropTypes.object.isRequired
}

export default Description;