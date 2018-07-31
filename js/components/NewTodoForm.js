export default class NewTodoForm {
  constructor(parentElement, onAdd) {
    this._parentElement = parentElement;
    this._onAdd = onAdd;
  }

  render() {
    this._parentElement.innerHTML = `
      <form class="new-todo-form">
        <input class="new-todo-form__input" type="text" placeholder="Add todo here" />
        <button class="new-todo-form__submit" type="submit">Add</button>
      </form>
    `;

    const input = this._parentElement.getElementsByClassName(
      'new-todo-form__input'
    )[0];
    const submit = this._parentElement.getElementsByClassName(
      'new-todo-form__submit'
    )[0];

    submit.addEventListener('click', event => {
      event.preventDefault();

      if (input.value === '') {
        return;
      }

      this._onAdd(input.value);
      input.value = '';
    });
  }
}
