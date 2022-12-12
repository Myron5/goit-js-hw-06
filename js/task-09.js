function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');

colorBtn.addEventListener('click', e => {
  const newColor = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = newColor;
  textSpan.textContent = newColor;
});
