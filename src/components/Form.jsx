import React, { Component } from 'react';
import InputName from './InputName';
import TextAreaDescription from './TextAreaDescription';
import AttrInput from './AttrInput';
import InputImage from './InputImage';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import propsFormTypes from '../types/types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick, hasTrunfo } = this.props;
    return (
      <form className="Form">
        <h2>Criar nova carta</h2>
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
        { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <InputCheckbox
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
        />}
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = propsFormTypes;

export default Form;
