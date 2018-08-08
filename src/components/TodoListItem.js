import './TodoListItem.css';

import React from 'react';

const TodoListItem = props => {
  const { todoItem, onItemToggle } = props;

  const elemId = `todo_${todoItem.id}`;
  const strikeText = todoItem.isDone ? 'todo-list-item__text--done' : '';
  const spanClass = `todo-list-item__text ${strikeText}`;

  const icon = todoItem.isDone ? (
    <i className="far fa-check-square" />
  ) : (
    <i className="far fa-square" />
  );

  return (
    <li className="todo-list-item">
      <input
        className="todo-list-item__checkbox"
        id={elemId}
        type="checkbox"
        onChange={() => onItemToggle(todoItem.id)}
        checked={todoItem.isDone}
      />
      <label className="todo-list-item__label" htmlFor={elemId}>
        {icon}
      </label>
      <span className={spanClass} onClick={() => onItemToggle(todoItem.id)}>
        {todoItem.text}
      </span>
    </li>
  );
};

export default TodoListItem;
