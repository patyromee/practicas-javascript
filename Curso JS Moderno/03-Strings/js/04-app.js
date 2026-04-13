const producto = '              Monitor 20 Pulgadas              '

// Eliminar del inicio los espacios en blanco

console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());

console.log(producto.trim()) //Elimina en ambas direcciones, espacios al inicio y al final