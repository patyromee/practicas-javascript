const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio:500},
    {nombre: 'Television', precio:100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio:400},
    {nombre: 'Celular', precio:700},

]

//Encontrar el índice de Abril
const indice = meses.findIndex( mes => mes ==='Abril');
console.log(indice);

//Encontrar un induce de un arreglo de objetos

const indice2 = carrito.findIndex( producto => producto.prexio === 100);
console.log(indice2);