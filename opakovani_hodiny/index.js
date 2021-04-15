'use strict';

const Clock = (hodiny, minuty) => {
  const vysledek = `
    <div class="clock">
      <span class="clock__hours">${String(hodiny).padStart(2, '0')}</span>
      :
      <span class="clock__minutes">${String(minuty).padStart(2, '0')}</span>
    </div>
  `;

  return vysledek;
};

const Clock2 = (props) => {
  const vysledek = `
    <div class="clock">
      <span class="clock__hours">${String(props.hodiny).padStart(2, '0')}</span>
      :
      <span class="clock__minutes">${String(props.minuty).padStart(
        2,
        '0',
      )}</span>
    </div>
  `;

  return vysledek;
};

const cas = {
  hodiny: 3,
  minuty: 10,
};

const appElm = document.querySelector('#app');
appElm.innerHTML = Clock(3, 1);
appElm.innerHTML += Clock2(cas);
appElm.innerHTML += Clock2({
  hodiny: 13,
  minuty: 15,
});
