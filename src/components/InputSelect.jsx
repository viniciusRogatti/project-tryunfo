import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class InputSelect extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="select">
        Selecionar raridade
        <select
          onChange={ onInputChange }
          value={ cardRare }
          id="select"
          data-testid="rare-input"
          name="select-rarity"
        >
          <option value="normal">
            normal
          </option>
          <option value="raro">
            raro
          </option>
          <option value="muito raro">
            muito raro
          </option>
        </select>
      </label>
    );
  }
}

InputSelect.propTypes = propsFormTypes;
