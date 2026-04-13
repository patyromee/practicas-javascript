//Class declaration
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;

    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de  ${this.saldo}`;

    }

    static bienvenida(){
        return `Bienvenida al cajero`
    }

}

const alma = new Cliente('Alma',400);
console.log(alma.mostrarInformacion());
console.log(alma);

console.log(alma.bienvenida());
console.log(Cliente.bienvenida());

//class expresion

const Cliente2 = class {
    constructor(nombre,saldo){

    this.nombre = nombre;
    this.saldo = saldo;

    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de  ${this.saldo}`;

    }

}

const alma2 = new Cliente2('Alma',400);
console.log(alma2.mostrarInformacion());
console.log(alma2);