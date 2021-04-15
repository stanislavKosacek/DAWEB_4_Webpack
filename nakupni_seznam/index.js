'use strict';

const nakup = [
  { nazev: 'máslo', mnozstvi: '1ks' },
  { nazev: 'sýr', mnozstvi: '200g' },
  { nazev: 'banány', mnozstvi: '8ks' },
];

const appElm = document.querySelector('#app');
appElm.innerHTML += ShoppingList({
  polozky: nakup,
});
