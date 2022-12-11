const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const mainBox = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  let markup = '';
  amount = Math.round(amount);
  if (typeof amount != 'number') amount = 1;
  for (let i = 1, pixelsCount = 30; i <= amount; i += 1, pixelsCount += 10) {
    markup += `<div class="newdiv" width="${pixelsCount}" height="${pixelsCount}" 
    style="background-color: ${getRandomHexColor()};  width: ${pixelsCount}px; height: ${pixelsCount}px"></div>\n`;
  }
  mainBox.insertAdjacentHTML('beforeend', markup);
};

const destroyBoxes = () => (mainBox.innerHTML = '');

createEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyEl.addEventListener('click', destroyBoxes);
