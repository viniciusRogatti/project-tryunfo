import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class TextAreaDescription extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="description-card">
        Descrição
        <textarea
          value={ cardDescription }
          onChange={ onInputChange }
          data-testid="description-input"
          id="description-card"
          name="description"
          cols="30"
          rows="10"
          max-width="10"
        />
      </label>
    );
  }
}

TextAreaDescription.propTypes = propsFormTypes;
