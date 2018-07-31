export default class TodoList {
  constructor(parentElement, onItemToggle) {
    this._onItemToggle = onItemToggle;
    this._parentElement = parentElement;
  }

  /**
   * @param {{ id: number, text: string, isDone: boolean }[]} todoItems
   */
  render(todoItems) {
    const ul = document.createElement('ul');
    ul.className = 'todo-list';

    todoItems.forEach(todo => {
      const li = this._createItemElement(
        todo.id,
        todo.text,
        todo.isDone,
        this._onItemToggle
      );
      ul.appendChild(li);
    });

    this._parentElement.innerHTML = '';
    this._parentElement.appendChild(ul);
  }

  _createItemElement(id, text, isDone, onItemToggle) {
    const li = document.createElement('li');
    li.className = 'todo-list__item';

    const elemId = `todo_${id}`;
    const checked = isDone ? 'checked' : '';
    const strikeText = isDone ? 'todo-list__item-text--done' : '';

    li.innerHTML = `
      <input class="todo-list__item-checkbox" id="${elemId}" type="checkbox" ${checked} />
      <label class="todo-list__item-label" for="${elemId}">
        ${
          isDone
            ? `<i class="far fa-check-square"></i>`
            : `<i class="far fa-square"></i>`
        }
      </label>
      <span class="todo-list__item-text ${strikeText}">${text}</span>
    `;

    const checkbox = li.getElementsByClassName('todo-list__item-checkbox')[0];
    const textElem = li.getElementsByClassName('todo-list__item-text')[0];

    checkbox.addEventListener('change', event => {
      onItemToggle(id);
    });

    textElem.addEventListener('click', event => {
      onItemToggle(id);
    });

    return li;
  }
}
