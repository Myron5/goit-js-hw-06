function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');

colorBtn.addEventListener('click', e => {
  const body = document.querySelector('body');
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  textSpan.textContent = newColor;
});
