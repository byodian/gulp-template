import sayHello from './app';
import { user } from './app'

const app = document.querySelector('#app');
app.innerHTML = sayHello();
