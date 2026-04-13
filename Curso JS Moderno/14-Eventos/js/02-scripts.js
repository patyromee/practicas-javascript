const nav = document.querySelector('.navehacion');

//registrar un evento
nav.addEventListener('click', () => {
    console.log("Click on nav");
})

nav.addEventListener('mouseenter',() => {
    console.log("Saliendo de la navegacion");
})

nav.addEventListener('dblclick',() => {
    console.log("Entrando a la navegacion");
})