export default class TodoList {
  constructor(elementId, onItemToggle) {
    this._init(elementId, onItemToggle);
  }

  /**
   * @param {{ text: string, isDone: boolean }[]} todoItems
   */
  update(todoItems) {
    const elems = todoItems.map((todo, i) =>
      this._createItemElement(i, todo.text, todo.checked)
    );
    this._clearItemElements();
    elems.forEach(e => this._rootElement.appendChild(e));
  }

  /**
   * @param {string} elementId
   * @param {Function} onItemToggle
   */
  _init(elementId, onItemToggle) {
    /**
     * @type {HTMLUListElement}
     */
    const root = document.getElementById(elementId);
    this._rootElement = root;
    this._clearItemElements();
  }

  _clearItemElements() {
    while (this._rootElement.firstChild) {
      this._rootElement.removeChild(this._rootElement.firstChild);
    }
  }

  _createItemElement(id, text, checked) {
    // TODO: Add event listeners for toggling items, make sure to call the
    //       onItemToggle callback.

    const li = document.createElement('li');
    li.className = 'todo-list__item';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'todo-list__item-checkbox';
    input.id = `todo_${id}`;
    input.checked = checked;

    const label = document.createElement('label');
    label.className = 'todo-list__item-label';
    label.for = input.id;

    const iconChecked = document.createElement('i');
    iconChecked.className = 'far fa-check-square';

    const iconUnchecked = document.createElement('i');
    iconUnchecked.className = 'far fa-square';

    label.appendChild(iconChecked);
    label.appendChild(iconUnchecked);

    const span = document.createElement('span');
    span.className = 'todo-list__item-text';

    const textNode = document.createTextNode(text);

    span.appendChild(textNode);

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(span);

    return li;
  }
}
