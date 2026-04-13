const enlace = document.createElement('A');

//Agregandole el texto
enlace.textContent = 'Nuevo Enlance';

enlace.href = '/nuevo-enlace';
console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.insertBefore(enlace, navegacion.children[1]);