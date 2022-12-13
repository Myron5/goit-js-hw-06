const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
const destroyEl = document.querySelector('[data-destroy]');
const mainBox = document.querySelector('#boxes');
let startPixels = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  amount = Number(amount);
  let markup = '';
  const endPixels = startPixels + amount * 10;
  for (let pixelsCount = startPixels; pixelsCount < endPixels; pixelsCount += 10)
    markup += `<div class="newdiv" style="background-color: ${getRandomHexColor()};  
    width: ${pixelsCount}px; height: ${pixelsCount}px"></div>\n`;

  mainBox.insertAdjacentHTML('beforeend', markup);
  startPixels = endPixels;
};

const destroyBoxes = () => {
  mainBox.innerHTML = '';
  startPixels = 30;
};

createEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyEl.addEventListener('click', () => {
  destroyBoxes();
});
