import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class InputCheckbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <input
        checked={ cardTrunfo }
        onChange={ onInputChange }
        data-testid="trunfo-input"
        type="checkbox"
        name="superTrunfo"
      />
    );
  }
}

InputCheckbox.propTypes = propsFormTypes;
