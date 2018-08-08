import './TodoView.css';

import React, { Component } from 'react';
import { observer } from 'mobx-react';

import NewTodoForm from '../components/NewTodoForm';
import FilterToggle from '../components/FilterToggle';
import TodoList from '../components/TodoList';

class TodoView extends Component {
  render() {
    const { store } = this.props;

    return (
      <div className="todo-view">
        <h1 className="todo-view__header">To-Do</h1>

        <NewTodoForm onSubmit={v => this._handleSubmit(v)} />
        <FilterToggle
          showAll={store.showAll}
          onFilter={s => this._handleFilter(s)}
        />
        <TodoList
          todoItems={store.items}
          onItemToggle={id => this._handleItemToggle(id)}
        />
      </div>
    );
  }

  _handleSubmit(value) {
    this.props.store.add({
      text: value,
      isDone: false,
    });
  }

  _handleFilter(showAll) {
    this.props.store.showAll = showAll;
  }

  _handleItemToggle(id) {
    this.props.store.toggleDone(id);
  }
}

export default observer(TodoView);
