const inputForm = document.querySelector('form.login-form');

const dataObj = {};
inputForm.addEventListener('submit', e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  if (!email.value || !password.value) {
    alert('Наявне пусте поле');
  } else {
    dataObj.email = email.value;
    dataObj.password = password.value;
    e.currentTarget.reset();
  }
});

console.log(dataObj);
