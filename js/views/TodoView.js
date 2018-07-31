import NewTodoForm from '../components/NewTodoForm.js';
import FilterToggle from '../components/FilterToggle.js';
import TodoList from '../components/TodoList.js';

import TodoStore from '../stores/TodoStore.js';

export default class TodoView {
  /**
   * @param {{ store: TodoStore }} props
   * @param {function(HTMLElement): void} onUpdate
   */
  constructor(props, onUpdate) {
    this._props = props;
    this._onUpdate = onUpdate;
  }

  render() {
    const { store } = this._props;

    const root = document.createElement('div');
    root.className = 'todo-view';

    root.innerHTML = `
      <h1 class="todo-view__header">To-Do</h1>
    `;

    root.appendChild(
      NewTodoForm({
        onSubmit: v => this._onSubmitHandler(v),
      })
    );
    root.appendChild(
      FilterToggle({
        showAll: store.showAll,
        onFilter: showAll => this._onFilterHandler(showAll),
      })
    );
    root.appendChild(
      TodoList({
        todoItems: store.items,
        onItemToggle: id => this._onItemToggleHandler(id),
      })
    );

    this._onUpdate(root);
  }

  _onSubmitHandler(value) {
    this._props.store.add({
      text: value,
      isDone: false,
    });

    this.render();
  }

  _onFilterHandler(showAll) {
    this._props.store.showAll = !showAll;

    this.render();
  }

  _onItemToggleHandler(id) {
    this._props.store.toggleDone(id);

    this.render();
  }
}
