import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="container-card">
        <h2 data-testid="name-card">
          { cardName }
        </h2>
        { cardImage ? <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        /> : ''}
        <p className="description" data-testid="description-card">{cardDescription}</p>
        { cardAttr1 ? <p className="attr1" data-testid="attr1-card">{cardAttr1}</p> : ''}
        { cardAttr2 ? <p className="attr2" data-testid="attr2-card">{cardAttr2}</p> : ''}
        { cardAttr3 ? <p className="attr3" data-testid="attr3-card">{cardAttr3}</p> : ''}
        <p className="rare" data-testid="rare-card">{cardRare}</p>
        { cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : '' }
      </div>
    );
  }
}

Card.propTypes = (propsFormTypes.cardImage, propsFormTypes.cardDescription,
propsFormTypes.cardAttr1, propsFormTypes.cardAttr2, propsFormTypes.cardAttr3,
propsFormTypes.cardImage, propsFormTypes.cardRare, propsFormTypes.cardTrunfo
);
