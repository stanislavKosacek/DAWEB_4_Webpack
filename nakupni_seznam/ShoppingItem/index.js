'use strict';

const ShoppingItem = (props) => {
  return `
    <div class="polozka">
      <div class="polozka__nazev">${props.nazev}</div>
      <div class="polozka__mnozstvi">${props.mnozstvi}</div>
    </div>`;
};
