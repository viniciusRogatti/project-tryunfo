import React from 'react';
import PreviewCard from './components/PreviewCard';
import Deck from './components/Deck';
import Form from './components/Form';
// import saoCharacters from './components/data';

import './index.css';

class App extends React.Component {
  state = {
    cardSave: [],
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'comum',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    listFilter: [],
    superTrunfo: false,
  }

  checkAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arrayAttr = [cardAttr1, cardAttr2, cardAttr3];
    const maxNumber = 90;
    const maxAttr = 210;
    const sum = arrayAttr.reduce((acc, curr) => acc + Number(curr), 0);
    const checKNumbers = arrayAttr.some((number) => Number(number) > maxNumber
      || Number(number) < 0);
    const verificationSum = sum > maxAttr;
    return checKNumbers || verificationSum;
  }

  validation = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arrayIputs = [cardName, cardDescription, cardImage, cardRare];
    const checKEmpty = arrayIputs.some((e) => e === '');
    const validationAtrrs = this.checkAttributes();
    return validationAtrrs || checKEmpty;
  };

  isTrunfo = () => {
    const { cardSave, cardTrunfo } = this.state;
    if (cardSave.length > 0) {
      const result = cardSave.some((card) => card.cardTrunfo === true);
      return result;
    }
    return cardTrunfo;
  }

  filterName = ({ target }) => {
    const { value } = target;
    const { cardSave } = this.state;
    if (value.length <= 0) {
      return this.setState({ listFilter: cardSave });
    }
    const newList = cardSave.filter((card) => card.cardName.includes(value));
    if (newList.length <= 0) {
      return this.setState({ listFilter: cardSave });
    }
    this.setState({ listFilter: newList });
  }

filterRare = ({ target }) => {
  const { value } = target;
  const { cardSave } = this.state;
  if (value === 'todas') return this.setState({ listFilter: cardSave });
  const newList = cardSave.filter((card) => card.cardRare === value);
  if (newList.length <= 0) return this.setState({ listFilter: cardSave });
  return this.setState({ listFilter: newList });
}

filterSuperTrunfo = ({ target }) => {
  const { checked } = target;
  const { cardSave } = this.state;
  const cardSuperTrunfo = cardSave.filter((card) => card.cardTrunfo === true);
  if (cardSuperTrunfo.length <= 0) return;
  this.setState({
    superTrunfo: checked,
    listFilter: (checked ? cardSuperTrunfo : cardSave),
  });
}

  onInputChange = ({ target }) => {
    const { value, checked, name, type, files } = target;
    const key = type === 'checkbox' ? checked : value;
    const filesImage = files;
    if (files) {
      return this.setState({ cardImage: URL.createObjectURL(filesImage[0]) });
    }
    this.setState({
      [name]: key,
    }, () => {
      this.setState({ isSaveButtonDisabled: this.validation() });
    });
  };

  deleteCard = ({ target }) => {
    const { id } = target;
    const { cardSave, hasTrunfo } = this.state;
    const newCardList = cardSave.filter((card) => card.id !== Number(id));
    this.setState({
      cardSave: newCardList,
      listFilter: newCardList,
    });
    if (hasTrunfo) this.setState({ hasTrunfo: false });
  }

  onSaveButtonClick = (event) => {
    const limited = 500;
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    event.preventDefault();
    const newCard = { id: Math.floor(Math.random() * limited + 1),
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevState) => ({
      cardSave: [...prevState.cardSave, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'comum',
      cardTrunfo: false,
      listFilter: [...prevState.cardSave, newCard],
    }));
    this.setState({
      hasTrunfo: cardTrunfo ? true : this.isTrunfo(),
      isSaveButtonDisabled: true,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo, cardSave, listFilter, superTrunfo } = this.state;

    const exibList = listFilter.length > 0 ? listFilter : cardSave;
    const element = exibList.length > 0
      ? <Deck cardSave={ exibList } deleteCard={ this.deleteCard } /> : '';
    return (
      <div className="container">
        <h1>Sword Art Online Tryunfo</h1>
        <div className="create-card-container">
          <Form
            cardName={ cardName }
            cardRare={ cardRare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            hasTrunfo={ hasTrunfo }
            cardImage={ cardImage }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            cardDescription={ cardDescription }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
          <PreviewCard
            cardRare={ cardRare }
            cardName={ cardName }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardTrunfo={ cardTrunfo }
            cardDescription={ cardDescription }
          />
        </div>
        <div className="container-filter">
          <label htmlFor="filterNameCard">
            Pesquisar carta por nome
            <br />
            <input
              disabled={ superTrunfo }
              id="filterNameCard"
              type="text"
              name="cardName"
              data-testid="name-filter"
              onChange={ this.filterName }
              placeholder="Digite o nome da carta"
            />
          </label>
          <label htmlFor="filterRareCard">
            Pesquisar carta por raridade
            <select
              disabled={ superTrunfo }
              data-testid="rare-filter"
              onChange={ this.filterRare }
              name="cardRame"
            >
              <option value="todas">
                todas
              </option>
              <option value="comum">
                comum
              </option>
              <option value="raro">
                raro
              </option>
              <option value="muito raro">
                muito raro
              </option>
            </select>
          </label>
          <label htmlFor="SuperTrunfo">
            Super Trunfo
            <input
              id="SuperTrunfo"
              type="checkbox"
              data-testid="trunfo-filter"
              onChange={ this.filterSuperTrunfo }
            />
          </label>
        </div>
        <div className="container-cards">
          { element }
        </div>
      </div>
    );
  }
}
export default App;
