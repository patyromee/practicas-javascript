const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregando al carrito"
    listaCursos.addEventListener('click', agregarCurso);
    
    //Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarrito.addEventListener('click', ()=>{
        articulosCarrito = [];

        limpiarHTML(); //Eliminamos todo el HTMl
    })
}


//Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();
    }
}
//Leer datos del curso

function leerDatosCurso(curso){

    //Crear un objeto con el contenido del curso actual^^
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}
//Revisa si un element ya existe en el carrito
const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
if(existe){
    const cursos = articulosCarrito.map(curso =>{
        if(curso.id === infoCurso.id) {
            curso.cantidad++;
            return curso; //retorna el objeto actualizado
        }else{
            return curso; //retorna los objetos que no son los duplicados
        }
    });
    articulosCarrito = [...cursos];
}else{
    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
}


console.log(articulosCarrito);
//Muestra el carrito de compras en el HTL
function carritoHTML(){
    
    limpiarHTML();


//Recorre el carrito y genera el HTML2
    articulosCarrito.forEach( curso => {
        const {imagen,titulo,precio, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>

        <td>
            ${curso.titulo}
        <td>
        `;

        //Agrega el htm en el tbody
        contenedorCarrito.appendChild(row);

    });

    //Elimina los cursos del tbody
    function limpiarHTML() {
        //forma lenta
       // contenedorCarrito.innerHTML = '';

       while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito)
       }
    }

}

