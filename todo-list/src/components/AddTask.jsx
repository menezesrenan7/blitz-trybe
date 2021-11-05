import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  constructor() {
    super();

    this.initialState = {
      id: 0,
      task: '',
    };

    this.state = this.initialState;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const newId = Math.round(Math.random() * 9999999);
    this.setState({
      id: newId,
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { onCreate } = this.props;
    const { id } = this.state;
    if (id !== 0) {
      onCreate(this.state);
      this.setState(this.initialState);
    }
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={task} onChange={this.handleInput} />
        <button type="submit">Adicionar tarefa</button>
      </form>
    );
  }
}

AddTask.propTypes = {
  onCreate: PropTypes.func,
}.isRequired;
