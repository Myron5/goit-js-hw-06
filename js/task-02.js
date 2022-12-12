const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const emptyList = document.querySelector('#ingredients');

const liArr = ingredients.map(ingradient => {
  const newLi = document.createElement('li');
  newLi.classList.add('item');
  newLi.textContent = ingradient;
  return newLi;
});

emptyList.append(...liArr);
