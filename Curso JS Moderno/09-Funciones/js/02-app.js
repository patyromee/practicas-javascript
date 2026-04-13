//La primer vuelta es de creación y la segunda es de ejecución, mejor conocido como Hoisting

sumar();
function sumar() {
    //cuerpo de la funcion
    console.log(2 + 2);

}


const sumar2 =  function (){
    console.log( 3 + 3);
}

sumar2();