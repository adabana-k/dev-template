import './style.css';
import { createGreeting } from './greeting.js';

const appName = import.meta.env.VITE_APP_NAME || 'アプリ開発テンプレート';
document.title = appName;
document.querySelector('#app-name').textContent = appName;
const form = document.querySelector('#greeting-form');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    message.textContent = createGreeting(new FormData(form).get('name'));
  } catch (error) {
    message.textContent = error.message;
  }
});
