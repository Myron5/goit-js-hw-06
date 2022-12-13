const inputForm = document.querySelector('form.login-form');

inputForm.addEventListener('submit', e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!email.value || !password.value) {
    alert('Наявне пусте поле');
    return;
  }
  const dataObj = { email: email.value, password: password.value };
  console.log(dataObj);
  e.currentTarget.reset();
});
