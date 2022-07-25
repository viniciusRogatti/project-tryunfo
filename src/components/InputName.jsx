import React, { Component } from 'react';
import propsFormTypes from '../types/types';
// import PropTypes from 'prop-types';

export default class InputName extends Component {
  render() {
    // const { handleName } = this.props;
    const { cardName, onInputChange } = this.props;
    return (
      <label htmlFor="name-card">
        Nome
        <input
          onChange={ onInputChange }
          name="cardName"
          value={ cardName }
          data-testid="name-input"
          id="name-card"
          type="text"
          placeholder="Digite um nome para a carta"
        />
      </label>
    );
  }
}

InputName.propTypes = propsFormTypes;

/* InputName.propTypes = {
  handleName: PropTypes.func.isRequired,
};
 */
