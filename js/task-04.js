const calculateBox = document.querySelector('#counter');
const calculateValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = Number(calculateValue.textContent);
console.log(counterValue);

decrementBtn.addEventListener('click', e => {
  counterValue -= 1;
  calculateValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', e => {
  counterValue += 1;
  calculateValue.textContent = counterValue;
});
