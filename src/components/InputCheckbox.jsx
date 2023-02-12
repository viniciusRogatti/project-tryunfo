import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputCheckbox extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trunfo:
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          id="cardTrunfo"
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
