import React, { Component } from 'react';

import TodoView from './views/TodoView';

import TodoStore from './stores/TodoStore';

const store = new TodoStore();

export default class App extends Component {
  render() {
    return <TodoView store={store} />;
  }
}
