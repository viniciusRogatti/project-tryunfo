import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Deck extends Component {
  deleteCardDeck = ({ id }) => {
    this.delete(id);
  }

  render() {
    const { cardSave, deleteCard } = this.props;
    return (
      <div>
        {cardSave.map((card) => (
          <div key={ card.id }>
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              id={ card.id }
              onClick={ deleteCard }
            >
              Excluir
            </button>
          </div>)) }
      </div>
    );
  }
}

Deck.propTypes = {
  cardSave: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.number,
    cardAttr2: PropTypes.number,
    cardAttr3: PropTypes.number,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
  deleteCard: PropTypes.func.isRequired,
};
