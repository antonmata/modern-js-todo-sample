import './TodoListItem.scss';

/**
 * @typedef {object} TodoItem
 * @prop {number} id
 * @prop {string} text
 * @prop {boolean} isDone
 */
/**
 * @param {{ todoItem: TodoItem, onItemToggle: function(number): void }} props
 */
const TodoListItem = props => {
  const { todoItem, onItemToggle } = props;

  const root = document.createElement('li');
  root.className = 'todo-list-item';

  const elemId = `todo_${todoItem.id}`;
  const checked = todoItem.isDone ? 'checked' : '';
  const strikeText = todoItem.isDone ? 'todo-list-item__text--done' : '';

  root.innerHTML = `
    <input class="todo-list-item__checkbox" id="${elemId}" type="checkbox" ${checked} />
    <label class="todo-list-item__label" for="${elemId}">
      ${
        todoItem.isDone
          ? `<i class="far fa-check-square"></i>`
          : `<i class="far fa-square"></i>`
      }
    </label>
    <span class="todo-list-item__text ${strikeText}">${todoItem.text}</span>
  `;

  const checkbox = root.querySelector('.todo-list-item__checkbox');
  const textElem = root.querySelector('.todo-list-item__text');

  checkbox.addEventListener('change', event => {
    onItemToggle(todoItem.id);
  });

  textElem.addEventListener('click', event => {
    onItemToggle(todoItem.id);
  });

  return root;
};

export default TodoListItem;
