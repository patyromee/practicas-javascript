const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', () => {
    e.preventDefault(); //-->evitar lo que el navegador realice

    console.log(e);

});