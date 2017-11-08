import React, { Component } from 'react';

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
  imgSource: React.PropTypes.object.isRequired
}

export default Image;