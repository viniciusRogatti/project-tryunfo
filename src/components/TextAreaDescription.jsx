import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class TextAreaDescription extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="description-card">
        Apelido
        <br />
        <input
          type="text"
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
          id="description-card"
          name="cardDescription"
          maxLength={ 20 }
          max-width="10"
        />
      </label>
    );
  }
}

TextAreaDescription.propTypes = (propsFormTypes.cardDescription,
propsFormTypes.onInputChange);
