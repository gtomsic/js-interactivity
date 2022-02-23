const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const movies = [];

const addMovie = (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteBtn';
  deleteBtn.textContent = 'X';
  span.textContent = input.value;
  span.addEventListener('click', crossOutWord);
  li.append(span);
  li.appendChild(deleteBtn);
  li.addEventListener('click', deleteMovie);
  ul.prepend(li);
  input.value = '';
};

const deleteMovie = (e) => {
  e.target.parentNode.remove();
};

const crossOutWord = (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('checked')) {
    e.target.classList.remove('checked');
    return;
  }
  e.target.className = 'checked';
};

form.addEventListener('submit', addMovie);
