class Cliente {

    #nombre;

    constructor(nombre,saldo){
        this.#nombre = nombre;
        this.saldo = saldo;

    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de  ${this.saldo}`;

    }

    static bienvenida(){
        return `Bienvenida al cajero`
    }

}

const alma = new Cliente('Alma', 200);
console.log(alma.mostrarInformacion());
//console.log(alma.#nombre);

