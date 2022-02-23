const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

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
  customMessage('Movie title added!');
};

const deleteMovie = (e) => {
  e.stopPropagation();
  e.target.parentNode.remove();
  customMessage('Movie deleted!');
};

const crossOutWord = (e) => {
  e.stopPropagation();

  if (e.target.classList.contains('checked')) {
    e.target.classList.remove('checked');
    return;
  }
  e.target.className = 'checked';
  customMessage('Word crossed out!');
};

const customMessage = (message) => {
  const messageEl = document.getElementById('message');
  messageEl.textContent = message;
  setTimeout(() => {
    messageEl.className = 'hide';
  }, 1000);
};

form.addEventListener('submit', addMovie);
