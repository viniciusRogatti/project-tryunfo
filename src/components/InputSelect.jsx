import React, { Component } from 'react';

export default class InputSelect extends Component {
  render() {
    return (
      <label htmlFor="select">
        Selecionar raridade
        <select id="select" data-testid="rare-input" name="select-rarity">
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
