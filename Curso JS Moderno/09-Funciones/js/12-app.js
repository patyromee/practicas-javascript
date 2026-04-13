const carrito = [
    {nombre: 'Monitr 27 Pulgadas', precio: 500 },
    {nombre: 'Television', precio: 100 },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Celular', precio: 1000 },
    
]


carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
})

carrito.map( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
})