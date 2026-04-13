const carrito = [];

//Definir producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Ipad",
    precio: 4000
}

//.push agrega al final de un arreglo

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

carrito.unshift(producto3);

console.table(carrito);

//Eliminar el último elemento del arreglo

carrito.pop();
console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);