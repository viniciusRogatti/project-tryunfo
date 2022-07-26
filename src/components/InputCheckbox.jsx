import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCheckbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <input
        checked={ cardTrunfo }
        onChange={ onInputChange }
        data-testid="trunfo-input"
        type="checkbox"
        name="cardTrunfo"
      />
    );
  }
}

InputCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
