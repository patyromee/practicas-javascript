const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input',(e) => {
    console.log(e.type);
})

//saber que se está escribiendo
busqueda.addEventListener('input',(e) => {
    console.log(e.target.value);
})