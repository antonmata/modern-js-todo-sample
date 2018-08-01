import TodoListItem from './TodoListItem';

/**
 * @typedef {object} TodoItem
 * @prop {number} id
 * @prop {string} text
 * @prop {boolean} isDone
 */
/**
 * @param {{ todoItems: TodoItem[], onItemToggle: function(number): void }} props
 */
const TodoList = props => {
  const { todoItems, onItemToggle } = props;

  const root = document.createElement('ul');
  root.className = 'todo-list';

  todoItems.forEach(todo => {
    const li = TodoListItem({ todoItem: todo, onItemToggle });
    root.appendChild(li);
  });

  return root;
};

export default TodoList;
