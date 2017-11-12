import React, { Component } from 'react';
import Description from '../atoms/Description.jsx'
import Image from '../atoms/Image.jsx'
import Header from '../atoms/Header.jsx'

class ListActivity extends Component {
  render() {
    return (
      <div>
        <Header
          {...this.props} />
        <Image
          {...this.props} />
        <Description
          {...this.props} />
      </div>
    )
  }
}

ListActivity.propTypes = {
  headerText: React.PropTypes.object.isRequired,
  imageSource: React.PropTypes.object.isRequired,
  description: React.PropTypes.object.isRequired
}
export default ListActivity;