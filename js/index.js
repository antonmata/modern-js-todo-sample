import TodoView from './components/TodoView.js';
import TodoStore from './stores/TodoStore.js';

const store = new TodoStore();

const mount = document.getElementById('main');

function onUpdateHandler(el) {
  mount.innerHTML = '';
  mount.appendChild(el);
}

const view = new TodoView({ store }, onUpdateHandler);
view.render();
