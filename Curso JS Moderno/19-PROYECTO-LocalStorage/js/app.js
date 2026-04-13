//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event Listeners
eventListeners();

function eventListeners(){

    //Cuando el usuario agrega un nuevo tweete
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();

    })

}


//Funciones

function agregarTweet(e){
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet === ''){
        mostrarError("No puede ir vacío");

        return; //Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    crearHTML();

    formulario.reset();



}

//Mostrar Mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta después de 3 segundos 

    setTimeout(() => {
        mensajeError.remove()

    }, 3000);

}

function crearHTML(){

    limpiarHTML()


    if(tweets.length > 0){
        tweets.forEach(tweet => {

            //agregar un botón
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la función de eliminar
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }


            //Crear HTML
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet;

            //ASSIGNAR EL BOTÓN
            li.appendChild(btnEliminar);

            //insertarlo en el html
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();
}

//Agrega los tweets actuales a Local Storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);
}

//Limpiar el HTML
function limpiarHTML(){
    while( listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

