const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');
const elements = ingredients.map(option => {
  const liEL = document.createElement("li");
  liEL.classList.add("item");
  liEL.textContent = option;
  

  console.log(liEL);
  return liEL;
});
ingredientsListEl.append(...elements);

//  ingredientsListEl.append(ingredient);




// const ulEl = document.querySelector('#ingredients');

// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

// ulEl.innerHTML = list;