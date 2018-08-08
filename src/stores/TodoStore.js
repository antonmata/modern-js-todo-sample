import { observable, action, computed, decorate } from 'mobx';

class TodoStore {
  constructor() {
    /**
     * @type {{ id: number, text: string, isDone: boolean }[]}
     */
    this._items = [
      {
        id: 0,
        text: 'Item A',
        isDone: false,
      },
      {
        id: 1,
        text: 'Item B',
        isDone: true,
      },
      {
        id: 2,
        text: 'Item C',
        isDone: false,
      },
    ];

    this._idCounter = this._items.length;
    this._showAll = true;
  }

  get showAll() {
    return this._showAll;
  }

  set showAll(value) {
    this._showAll = value;
  }

  get items() {
    if (this._showAll) {
      return this._items;
    } else {
      return this._items.filter(i => !i.isDone);
    }
  }

  add(todoItem) {
    todoItem.id = this._idCounter++;
    this._items.push(todoItem);
  }

  toggleDone(id) {
    const item = this._items.find(i => i.id === id);
    item.isDone = !item.isDone;
  }
}

export default decorate(TodoStore, {
  _items: observable,
  _showAll: observable,
  showAll: computed,
  items: computed,
  add: action,
  toggleDone: action,
});
