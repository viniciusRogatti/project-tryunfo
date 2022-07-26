import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

import './index.css';

class App extends React.Component {
  state = {
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

  checkNumber = () => {
    const { cardAttr1, cardAttr2, cardAttr3, cardName,
      cardDescription, cardImage, cardRare } = this.state;
    const array = [cardAttr1, cardAttr2, cardAttr3];
    const arrayIputs = [cardName, cardDescription, cardImage, cardRare];
    const checkLength = arrayIputs.some((e) => e === '');
    const maxNumber = 90;
    const maxAttr = 210;
    const sum = array.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    const verification = array.some((number) => parseInt(number, 10)
      > maxNumber || parseInt(number, 10) < 0);
    const verificationSum = sum > maxAttr;
    console.log(checkLength);
    console.log(verification);
    console.log(verificationSum);
    const result = verification || verificationSum || checkLength;
    console.log(result);
    return result;
  };

  onInputChange = ({ target }) => {
    const { value, checked, name } = target;
    const key = target.type === 'checkbox' ? checked : value;
    console.log(this.checkNumber());
    this.setState({ [name]: key }, () => {
      this.setState({ isSaveButtonDisabled: this.checkNumber() });
    });
  };

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
