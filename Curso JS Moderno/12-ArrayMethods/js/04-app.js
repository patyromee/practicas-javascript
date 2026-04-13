const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},
];

let resultado;

//filter crea un nuevo arreglo con la condición que se esté poniendo en ese momento

resultado = carrito.filter(producto => producto.precio > 400);
resultado = carrito.filter(producto => producto.precio < 600);
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
