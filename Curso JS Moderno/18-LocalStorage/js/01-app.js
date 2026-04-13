localStorage.setItem('nombre', 'Alma');

//localStorage sólo acepta strings, pero se pueden convertir usando JSON.stringify

const producto = {
    nombre : "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));