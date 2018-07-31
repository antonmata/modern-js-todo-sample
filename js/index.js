import NewTodoForm from './components/NewTodoForm.js';
import FilterToggle from './components/FilterToggle.js';
import TodoList from './components/TodoList.js';

import TodoStore from './stores/TodoStore.js';

const store = new TodoStore();

const formMountNode = document.getElementById('formComponent');
const filterMountNode = document.getElementById('filterComponent');
const todoListMountNode = document.getElementById('todoListComponent');

const formComponent = new NewTodoForm(formMountNode, onAdd);
const filterComponent = new FilterToggle(filterMountNode, onFilter);
const todoListComponent = new TodoList(todoListMountNode, onItemToggle);

/**
 * Must call this function whenever we want to update the UI
 */
function render() {
  formComponent.render();
  filterComponent.render(store.showAll);
  todoListComponent.render(store.items);
}

function onAdd(value) {
  store.add({
    text: value,
    isDone: false,
  });

  render();
}

function onFilter(showAll) {
  store.showAll = !showAll;

  render();
}

function onItemToggle(id) {
  store.toggleDone(id);

  render();
}

// Call update to initialize the UI
render();
