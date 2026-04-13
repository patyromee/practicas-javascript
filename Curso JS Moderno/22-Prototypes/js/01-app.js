//Object literal no permite construir objetos dinámicos ni reconstruibles
const cliente = {
    nombre: 'Alma',
    saldo: 500

}

console.log(cliente);


//Objeto reutilizable se le conoce como object constructor

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

}

const Alma = new Cliente('Alma', 500);

console.log(Alma);

//Cada objeto que se crean en JS tiene un proto