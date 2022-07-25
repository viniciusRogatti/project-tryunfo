import React, { Component } from 'react';
import InputName from './InputName';
import TextAreaDescription from './TextAreaDescription';
import AttrInput from './AttrInput';
import InputImage from './InputImage';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';

class Form extends Component {
/*   state = {
    name: '',
  }

  handleName = ({ target }) => {
    console.log(target.value);
    this.setState({
      name: target.value,
    });
  } */

  render() {
    return (
      <div className="Form">
        <h1>Criar nova carta</h1>
        <InputName />
        <TextAreaDescription />
        <AttrInput />
        <InputImage />
        <InputSelect />
        <InputCheckbox />
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

export default Form;
