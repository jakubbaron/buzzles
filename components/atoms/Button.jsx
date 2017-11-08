import React, { Component } from 'react';
import PropTypes from 'prop-types';

//TODO rename to TextButton and create and ImageButton? or should that be a molecule already?
class Button extends Component {
  onClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }
  render() {
    const {btnTxt} = this.props;
    return (
      <div>
        <button type='button' className='btn btn-primary'
          onClick={this.onClick.bind(this)}>
          {this.props.buttonText}
        </button>
      </div>
    )
  }
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;