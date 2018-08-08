import './TodoView.css';

import React, { Component } from 'react';

import NewTodoForm from '../components/NewTodoForm';
import FilterToggle from '../components/FilterToggle';
import TodoList from '../components/TodoList';

export default class TodoView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          text: 'Item A',
          isDone: false,
        },
        {
          id: 1,
          text: 'Item B',
          isDone: true,
        },
        {
          id: 2,
          text: 'Item C',
          isDone: false,
        },
      ],
      idCounter: 3,
      showAll: true,
    };
  }

  render() {
    const { showAll } = this.state;

    return (
      <div className="todo-view">
        <h1 className="todo-view__header">To-Do</h1>

        <NewTodoForm onSubmit={v => this._onSubmitHandler(v)} />
        <FilterToggle
          showAll={showAll}
          onFilter={s => this._onFilterHandler(s)}
        />
        <TodoList
          todoItems={this._getItems()}
          onItemToggle={id => this._onItemToggleHandler(id)}
        />
      </div>
    );
  }

  _onSubmitHandler(value) {
    this._add({
      text: value,
      isDone: false,
    });
  }

  _onFilterHandler(showAll) {
    this.setState({
      showAll,
    });
  }

  _onItemToggleHandler(id) {
    this._toggleDone(id);
  }

  _getItems() {
    if (this.state.showAll) {
      return this.state.items;
    } else {
      return this.state.items.filter(i => !i.isDone);
    }
  }

  _add(todoItem) {
    const idCounter = this.state.idCounter + 1;
    todoItem.id = idCounter;
    const items = this.state.items.slice();
    items.push(todoItem);

    this.setState({
      items,
      idCounter,
    });
  }

  _toggleDone(id) {
    const items = this.state.items.slice();
    const item = items.find(i => i.id === id);
    item.isDone = !item.isDone;

    this.setState({
      items,
    });
  }
}
