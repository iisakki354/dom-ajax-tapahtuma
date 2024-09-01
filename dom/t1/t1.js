'use strict';
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];
const lista = document.querySelector('#target');
// add your code here
for (const todo of todoList) {
  let checkAttr = '';
  if (todo.completed) {
    checkAttr = 'checked';
  }

  const html = `<li>
                  <input type="checkbox" id="todo-${todo.id}" ${checkAttr}>
                  <label for="todo-${todo.id}">${todo.task}</label>
                </li>`;
  lista.insertAdjacentHTML('beforeend', html);
}
