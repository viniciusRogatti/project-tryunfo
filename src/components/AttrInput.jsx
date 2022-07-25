import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class AttrInput extends Component {
  render() {
    const { cardAttr1, cardAttr2, cardAttr3, onInputChange } = this.props;
    return (
      <div className="container-atributes">
        <label htmlFor="attr1">
          Attr1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="attr1"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="attr2"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="attr3"
            data-testid="attr3-input"
            type="number"
          />
        </label>
      </div>
    );
  }
}

AttrInput.propTypes = propsFormTypes;
