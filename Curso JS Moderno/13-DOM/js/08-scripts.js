/*const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos
console.log(navegacion.children);

console.log(navegacion.children[1].nodeName);
console.log(navegacion.childre[1].nodeType); */

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';
console.log(card.children[1].children[1],textContent);


//Traversing del hijo al padre
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);