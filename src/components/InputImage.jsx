import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class InputImage extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <label htmlFor="image-input" id="image-label">
        Enviar Imagem
        <br />
        <input
          onChange={ onInputChange }
          name="cardImage"
          data-testid="image-input"
          id="image-input"
          type="file"
          accept="image/*"
        />
      </label>
    );
  }
}

InputImage.propTypes = (propsFormTypes.cardImage, propsFormTypes.onInputChange);
