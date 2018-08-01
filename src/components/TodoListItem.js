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
  root.className = 'todo-list__item';

  const elemId = `todo_${todoItem.id}`;
  const checked = todoItem.isDone ? 'checked' : '';
  const strikeText = todoItem.isDone ? 'todo-list__item-text--done' : '';

  root.innerHTML = `
    <input class="todo-list__item-checkbox" id="${elemId}" type="checkbox" ${checked} />
    <label class="todo-list__item-label" for="${elemId}">
      ${
        todoItem.isDone
          ? `<i class="far fa-check-square"></i>`
          : `<i class="far fa-square"></i>`
      }
    </label>
    <span class="todo-list__item-text ${strikeText}">${todoItem.text}</span>
  `;

  const checkbox = root.getElementsByClassName('todo-list__item-checkbox')[0];
  const textElem = root.getElementsByClassName('todo-list__item-text')[0];

  checkbox.addEventListener('change', event => {
    onItemToggle(todoItem.id);
  });

  textElem.addEventListener('click', event => {
    onItemToggle(todoItem.id);
  });

  return root;
};

export default TodoListItem;
