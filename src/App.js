import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  }

  checkAttributes = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arrayAttr = [cardAttr1, cardAttr2, cardAttr3];
    const maxNumber = 90;
    const maxAttr = 210;
    const sum = arrayAttr.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    const checKNunbers = arrayAttr.some((number) => parseInt(number, 10) > maxNumber
    || parseInt(number, 10) < 0 || number === '');
    const verificationSum = sum > maxAttr;
    return checKNunbers || verificationSum;
  }

  validation = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arrayIputs = [cardName, cardDescription, cardImage, cardRare];
    const checKEmpty = arrayIputs.some((e) => e === '');
    const validationAtrrs = this.checkAttributes();
    return validationAtrrs || checKEmpty;
  };

  onInputChange = ({ target }) => {
    const { value, checked, name, type } = target;
    const key = type === 'checkbox' ? checked : value;
    this.setState({ [name]: key }, () => {
      this.setState({ isSaveButtonDisabled: this.validation() });
    });
  };

  onSaveButtonClick = (event) => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.state;
    event.preventDefault();
    const newCard = {
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
      cardRare: '',
      cardTrunfo: false,
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div className="App">
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
