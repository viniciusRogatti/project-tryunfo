import React, { Component } from 'react';
import propsFormTypes from '../types/types';

export default class PreviewCard extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    const isTrunfo = cardTrunfo ? 'superTrunfo' : '';
    const rarity = isTrunfo || cardRare;
    return (
      <div
        className="container-preview"
      >
        <div className={ `preview-card ${rarity}` }>
          <div className="preview-card__image">
            { cardImage ? <img
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            /> : ''}
          </div>
          <div className="preview-division"> </div>
          <div className="preview-card__name">
            { cardName }
            <sup>
              {cardDescription}
            </sup>
          </div>
          <div className="preview-card__stats">

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

PreviewCard.propTypes = (propsFormTypes.cardImage, propsFormTypes.cardDescription,
propsFormTypes.cardAttr1, propsFormTypes.cardAttr2, propsFormTypes.cardAttr3,
propsFormTypes.cardImage, propsFormTypes.cardRare, propsFormTypes.cardTrunfo
);
