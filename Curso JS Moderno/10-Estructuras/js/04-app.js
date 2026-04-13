const dinero = 500;
const totalAPagar = 300;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log("Si podemos pagar");
}else if(tarjeta){
    console.log("Pago con tarjeta");
}
else{
    console.log("Fondos insuficientes");
}