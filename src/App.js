import React, { Component, Fragment } from 'react';
import DevTools from 'mobx-react-devtools';

import TodoView from './views/TodoView';

import TodoStore from './stores/TodoStore';

const store = new TodoStore();

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <TodoView store={store} />
        <DevTools />
      </Fragment>
    );
  }
}
