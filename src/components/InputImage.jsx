import React, { Component } from 'react';

export default class InputImage extends Component {
  render() {
    return (
      <label htmlFor="image-input">
        Imagem
        <input data-testid="image-input" id="image-input" type="text" />
      </label>
    );
  }
}
