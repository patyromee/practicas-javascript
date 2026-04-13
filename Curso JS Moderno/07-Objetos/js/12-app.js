//Object literal

const producto ={
    nombre: "Tablet",
    precio:300,
    disponible: true

}

//Object Constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto ('Samsung Galaxy', 2000);
console.log(producto2);