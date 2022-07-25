import React, { Component } from 'react';
// import propTypes from 'prop-types';

export default class TextAreaDescription extends Component {
  render() {
    // const { value } = this.props;
    return (
      <label htmlFor="description-card">
        Descrição
        <textarea
          data-testid="description-input"
          id="description-card"
          name="description"
          cols="30"
          rows="10"
          max-width="10"
        />
      </label>
    );
  }
}

/* TextAreaDescription.propTypes = {
  value: propTypes.string.isRequired,
}; */
