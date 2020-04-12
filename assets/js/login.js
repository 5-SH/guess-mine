import { initSockets } from './sockets';

const body = document.querySelector('body');
const loginForm = document.getElementById('jsLogin');
const NICKNAME = 'nickname';
const nickname = localStorage.getItem(NICKNAME);

const LOGGED_OUT = 'loggedOut';
const LOGGED_IN = 'loggedIn';

const logIn = nickname => {
  // eslint-disable-next-line no-undef
  const socket = io('/');
  socket.emit(window.events.setNickname, { nickname });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector('input');
  const { value } = input;
  localStorage.setItem(NICKNAME, value);
  input.value = '';
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit);
}
