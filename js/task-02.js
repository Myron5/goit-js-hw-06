const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const emptyList = document.querySelector('#ingredients');

const liArr = [];
for (const ingradient of ingredients) {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = ingradient;
  liArr.push(newLi);
}

emptyList.append(...liArr);
