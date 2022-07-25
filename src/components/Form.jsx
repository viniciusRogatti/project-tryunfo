import React, { Component } from 'react';
import InputName from './InputName';
import TextAreaDescription from './TextAreaDescription';
import AttrInput from './AttrInput';
import InputImage from './InputImage';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import propsFormTypes from '../types/types';

class Form extends Component {
/*   state = {
    name: '',
  }

  handleName = ({ target }) => {
    console.log(target.value);
    this.setState({
      name: target.value,
    });q
  } */

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div className="Form">
        <h1>Criar nova carta</h1>
        <InputName cardName={ cardName } onInputChange={ onInputChange } />
        <TextAreaDescription
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <AttrInput
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <InputImage cardImage={ cardImage } onInputChange={ onInputChange } />
        <InputSelect cardRare={ cardRare } onInputChange={ onInputChange } />
        <InputCheckbox cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = propsFormTypes;

export default Form;
