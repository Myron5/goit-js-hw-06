const inputEl = document.querySelector('#validation-input');
const charCount = inputEl.dataset.length;
console.log(charCount);

inputEl.addEventListener('blur', e => {
  if (e.currentTarget.value.length === charCount) {
    e.currentTarget.classList.remove('invalid');
    e.currentTarget.classList.add('valid');
  } else {
    e.currentTarget.classList.remove('valid');
    e.currentTarget.classList.add('invalid');
  }
});
