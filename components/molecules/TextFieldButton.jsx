import React, { Component } from 'react';
import Button from '../atoms'
import TextField from '../atoms'
class TextFieldButton extends Component {
  render() {
    return (
      <div>
        <Button />
        <TextField />
      </div>
    )
  }
}

TextFieldButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  hint: React.PropTypes.object
}
export default TextFieldButton;