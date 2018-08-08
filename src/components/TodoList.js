import './TodoList.css';

import React from 'react';

import TodoListItem from './TodoListItem';

/**
 * @typedef {object} TodoItem
 * @prop {number} id
 * @prop {string} text
 * @prop {boolean} isDone
 */
/**
 * @param {{ todoItems: TodoItem[], onItemToggle: function(number): void }} props
 */
const TodoList = props => {
  const { todoItems, onItemToggle } = props;

  const listItems = todoItems.map((v, i) => (
    <TodoListItem key={i} todoItem={v} onItemToggle={onItemToggle} />
  ));

  return <ul className="todo-list">{listItems}</ul>;
};

export default TodoList;
