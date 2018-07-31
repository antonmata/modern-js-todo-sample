/**
 * @param {{ onSubmit: function(string): void }} props
 */
const NewTodoForm = props => {
  const { onSubmit } = props;

  const root = document.createElement('form');
  root.className = 'new-todo-form';
  root.innerHTML = `
    <input class="new-todo-form__input" type="text" placeholder="Add todo here" />
    <button class="new-todo-form__submit" type="submit">Add</button>
  `;

  const input = root.getElementsByClassName('new-todo-form__input')[0];
  const submit = root.getElementsByClassName('new-todo-form__submit')[0];

  submit.addEventListener('click', event => {
    event.preventDefault();

    if (input.value === '') {
      return;
    }

    onSubmit(input.value);
  });

  return root;
};

export default NewTodoForm;
