const producto ={
    nombre: "Tablet",
    precio:300,
    disponible: true

}

//Retorna las keys, retorna la parte izquierda del objeto
console.log(Object.keys(producto));

//Retorna los valores 
console.log(Object.values(producto));

//Retorna todo lo del objeto en pares
console.log(Object.entries(producto));
