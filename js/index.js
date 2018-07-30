import NewTodoForm from './components/NewTodoForm.js';
import FilterToggle from './components/FilterToggle.js';
import TodoList from './components/TodoList.js';

import TodoStore from './stores/TodoStore.js';

const store = new TodoStore();

/**
 * Must call this function whenever we want to update the UI
 */
function update() {
  todoListComponent.update(store.items);
}

function onAdd(value) {
  store.add({
    text: value,
    isDone: false,
  });

  update();
}

function onFilter(showAll) {
  store.showAll = showAll;

  update();
}

function onItemToggle(id) {
  update();
}

const todoListComponent = new TodoList('todoListComponent', onItemToggle);
const formComponent = new NewTodoForm('formComponent', onAdd);
const filterToggleComponent = new FilterToggle(
  'toggleComponent',
  onFilter,
  store.showAll
);

// Call update to initialize the UI
update();
