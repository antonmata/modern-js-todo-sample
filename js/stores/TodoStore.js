export default class TodoStore {
  constructor() {
    /**
     * @type {{ text: string, isDone: boolean }[]}
     */
    this._items = [
      {
        text: 'Item A',
        isDone: false,
      },
      {
        text: 'Item B',
        isDone: true,
      },
      {
        text: 'Item C',
        isDone: false,
      },
    ];

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
    this._items.push(todoItem);
  }

  toggleDone(id) {
    const item = this._items[id];
    item.isDone = !item.isDone;
  }
}
