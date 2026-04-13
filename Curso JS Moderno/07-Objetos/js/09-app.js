"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
}

//No permite aregar ni eliminar las propiedades de un objeto pero si permite modificar las existentes

Object.seal(producto);

producto.disponible = false;
//delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));