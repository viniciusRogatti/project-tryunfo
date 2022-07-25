import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class InputName extends Component {
  render() {
    // const { handleName } = this.props;
    return (
      <label htmlFor="name-card">
        Nome
        <input
          data-testid="name-input"
          id="name-card"
          type="text"
          placeholder="Digite um nome para a carta"
        />
      </label>
    );
  }
}

/* InputName.propTypes = {
  handleName: PropTypes.func.isRequired,
};
 */
