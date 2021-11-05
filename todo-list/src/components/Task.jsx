import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Task extends Component {
  constructor() {
    super();

    this.state = {};
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   const { key, task, onFinish } = this.props;
  //   const { checked } = e.target;
  //   onFinish({ id: key, task, hasFinished: checked });
  //   return checked;
  // }

  render() {
    const { key, task, onRemove } = this.props;
    return (
      <div>
        <input type="checkbox" />
        <h1>{ task }</h1>
        <button type="button" onClick={() => onRemove(key)}>Remover</button>
      </div>
    );
  }
}
Task.propTypes = {
  key: PropTypes.number,
  task: PropTypes.string,
  onRemove: PropTypes.func,
}.isRequired;
