const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

//Destructuuring
const { nombre } = producto;
console.log(nombre)

//Destructuring con Arreglos
const numeros = [10,20,30,40,50];
const [primero, ...tercero ] = numeros;
 
console.log(primero);
