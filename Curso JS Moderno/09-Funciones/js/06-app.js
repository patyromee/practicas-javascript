//Agregar parámetros por default

/*En el siguiente código se agrega el =, esto es para que si falta algún parámetro
de la función agrega lo que está después del = */

function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`); 
}

saludar('Alma');


