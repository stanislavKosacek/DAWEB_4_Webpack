import { ShoppingList } from './ShoppingList/index';
import { nakup } from './data';
import './index.html';
import './style.css';

const appElm = document.querySelector('#app');
appElm.innerHTML += ShoppingList({
  polozky: nakup,
});
