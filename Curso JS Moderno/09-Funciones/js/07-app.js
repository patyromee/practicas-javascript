//Comunicarse entre funciones

iniciarApp(); 

function iniciarApp(){
    console.log('Iniciando app..');
    segundaFunction();
}

function segundaFunction(){
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Alma');

}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...espere...');
    console.log(`Usuario ${usuario} autenticado exitosamente`);

}