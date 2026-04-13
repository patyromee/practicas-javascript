const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
];

//Con este método todos se deben de cumplir, por ejemplo en este caso arrojara un false, porque hay uno que su precio es mayor a 500
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado);