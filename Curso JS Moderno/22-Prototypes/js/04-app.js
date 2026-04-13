function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';

    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`

}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
}

//Herencia de Prototype
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constuctor = Persona;

//Instanciarlo
const alma = new Persona('Alma', 5000, 10920192);
console.log(alma);
console.log(alma.nombreClienteSaldo);

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(alma.mostrarTelefono());