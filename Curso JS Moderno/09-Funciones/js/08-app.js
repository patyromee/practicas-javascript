//Función que retorna un valor

function sumar(a,b){
    return a + b;
}

const resultado = sumar(2,2);

console.log(resultado);

//Ejemplo más avanzado de funcion que retorna un valor 
let total = 0;
function agregarCarrito(precio){
    return total += precio;


}

function calcularImpuesto(total){
    return total * 1.15;

}

total = agregarCarrito(100);
total = agregarCarrito(50);

const totalPagar = calcularImpuesto(total);
console.log(`Total a pagar es ${totalPagar}`);

console.log(total);