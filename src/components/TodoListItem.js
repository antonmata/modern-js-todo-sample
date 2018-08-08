import './TodoListItem.css';

import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

const TodoListItem = props => {
  const { todoItem, onItemToggle } = props;

  const elemId = `todo_${todoItem.id}`;
  const spanClass = classNames('todo-list-item__text', {
    'todo-list-item__text--done': todoItem.isDone,
  });

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

export default observer(TodoListItem);
