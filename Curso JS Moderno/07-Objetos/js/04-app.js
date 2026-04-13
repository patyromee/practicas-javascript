const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

//const nombre = producto.nombre;
//console.log(producto.nombre);

//Destructuring -> Extrae el valor y además crea la variable
const { nombre } = producto;
const { precio } = producto;
console.log(nombre);
console.log(precio); 
