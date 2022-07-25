import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class InputImage extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="image-input">
        Imagem
        <input
          value={ cardImage }
          onChange={ onInputChange }
          name="cardImage"
          data-testid="image-input"
          id="image-input"
          type="text"
        />
      </label>
    );
  }
}

InputImage.propTypes = propsFormTypes;
