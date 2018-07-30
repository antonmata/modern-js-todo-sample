export default class NewTodoForm {
  constructor(elementId, onAdd) {
    this._init(elementId, onAdd);
  }

  /**
   * @param {string} elementId The root element's ID.
   * @param {Function} onAdd A callback that is called when the submit button is clicked.
   */
  _init(elementId, onAdd) {
    /**
     * @type {HTMLFormElement}
     */
    const root = document.getElementById(elementId);
    const input = root.getElementsByClassName('new-todo-form__input')[0];
    const submit = root.getElementsByClassName('new-todo-form__submit')[0];

    submit.addEventListener('click', event => {
      event.preventDefault();

      if (input.value === '') {
        return;
      }

      onAdd(input.value);
      input.value = '';
    });
  }
}
