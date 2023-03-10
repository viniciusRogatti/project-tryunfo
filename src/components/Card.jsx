import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    const isTrunfo = cardTrunfo ? 'superTrunfo' : '';
    const rarity = isTrunfo || cardRare;
    return (
      <div className="wrapper">
        <div className={ `card ${rarity}` }>
          <div className="card__image">
            <img
              src={ cardImage }
              alt={ cardName }
            />
          </div>
          <div className="division"> </div>
          <div className="card__name">
            { cardName }
            <sup>
              {cardDescription}
            </sup>
          </div>
          <div className="card__stats">

            <div className="one-third">
              <div className="stat">{ cardAttr1 }</div>
              <div className="stat-value">Atk</div>
            </div>

            <div className="one-third">
              <div className="stat">{ cardAttr2 }</div>
              <div className="stat-value">Def</div>
            </div>

            <div className="one-third no-border">
              <div className="stat">{ cardAttr3 }</div>
              <div className="stat-value">Speed</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = (propsFormTypes.cardImage, propsFormTypes.cardDescription,
propsFormTypes.cardAttr1, propsFormTypes.cardAttr2, propsFormTypes.cardAttr3,
propsFormTypes.cardImage, propsFormTypes.cardRare, propsFormTypes.cardTrunfo
);
