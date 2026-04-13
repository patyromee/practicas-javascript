const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
]
//Con un reduce
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);