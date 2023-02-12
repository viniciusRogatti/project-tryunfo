import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class InputSelect extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="select">
        Selecionar raridade:
        <select
          onChange={ onInputChange }
          value={ cardRare }
          id="select"
          data-testid="rare-input"
          name="cardRare"
        >
          <option value="comum">
            comum
          </option>
          <option value="raro">
            raro
          </option>
          <option value="muitoRaro">
            muito raro
          </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = (propsFormTypes.cardRare, propsFormTypes.onInputChange);
