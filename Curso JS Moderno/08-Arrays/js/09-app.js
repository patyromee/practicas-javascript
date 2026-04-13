const carrito = [
    {nombre: 'Monitr 27 Pulgadas', precio: 500 },
    {nombre: 'Television', precio: 100 },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Celular', precio: 1000 },
    
]

for(let i = 0; i < carrito.length; i++) {
    console.log( carrito[i] );
}

//Array methods (for each)
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio }`);
})