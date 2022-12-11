const inputEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
inputEl.addEventListener('input', e => {
  textSpan.style.fontSize = `${e.currentTarget.value}px`;
  console.log(e.currentTarget.value);
});
