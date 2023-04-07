const form = document.querySelector('form');
const todosList = document.querySelector('ul');
const btnClearAll = document.querySelector('.clear');
const input = document.getElementById('user-todo');

// let todosArray = [];

let todosArray = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

const storage = JSON.parse(localStorage.getItem('todos'));
form.addEventListener('submit', function (e) {
  e.preventDefault();
  todosArray.push(input.value);
  localStorage.setItem('todos', JSON.stringify(todosArray));
  todoMaker(input.value);
  input.value = '';
});

const todoMaker = function (text) {
  const todo = document.createElement('li');
  todo.textContent = text;
  todosList.appendChild(todo);
};

for (let i = 0; i < storage.length; i++) {
  todoMaker(storage[i]);
}

btnClearAll.addEventListener('click', () => {
  localStorage.clear();
  while (todosList.firstChild) {
    todosList.removeChild(todosList.firstChild);
  }
});
