import React, { Component } from 'react';

export default class AttrInput extends Component {
  render() {
    return (
      <div className="container-atributes">
        <label htmlFor="attr1">
          Attr1
          <input id="attr1" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="attr2">
          Attr2
          <input id="attr2" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input id="attr3" data-testid="attr3-input" type="number" />
        </label>
      </div>
    );
  }
}
