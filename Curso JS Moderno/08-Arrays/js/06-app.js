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

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado; 

resultado = [...carrito,producto];
resultado = [...resultado,producto2];

console.table(resultado);