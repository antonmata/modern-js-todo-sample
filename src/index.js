import '../scss/index.scss';

import TodoView from './views/TodoView';
import TodoStore from './stores/TodoStore';

const store = new TodoStore();

const container = document.getElementById('root');

function onUpdateHandler(el) {
  container.innerHTML = '';
  container.appendChild(el);
}

const view = new TodoView({ store }, onUpdateHandler);
view.render();
