import './NewTodoForm.css';

import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    const { text } = this.state;

    return (
      <form className="new-todo-form">
        <input
          className="new-todo-form__input"
          type="text"
          placeholder="Add to-do here"
          value={text}
          onChange={e => this._onTextChangeHandler(e.currentTarget.value)}
        />
        <button
          className="new-todo-form__submit"
          type="submit"
          onClick={e => this._onClickHanlder(e)}
        >
          Add
        </button>
      </form>
    );
  }

  _onTextChangeHandler(text) {
    this.setState({
      text,
    });
  }

  _onClickHanlder(event) {
    event.preventDefault();

    if (this.state.text === '') {
      return;
    }

    this.props.onSubmit(this.state.text);

    this.setState({
      text: '',
    });
  }
}
