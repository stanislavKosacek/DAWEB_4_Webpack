'use strict';

const ShoppingList = (props) => {
  let vysledek = `
  <div class="seznam">
    <div class="seznam__polozky">`;

  props.polozky.forEach((polozka) => {
    vysledek += ShoppingItem(polozka);
  });

  vysledek += `</div>
  </div>
  `;

  return vysledek;
};
