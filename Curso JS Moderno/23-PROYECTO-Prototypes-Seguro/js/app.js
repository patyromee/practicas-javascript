
//Constructores
function Seguro(marca, year , tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function(){

    let cantidad;
    const base = 2000;

    console.log(this.marca);
    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
        case '2':
            cantidad = base * 1.05;
        case '3':
            cantidad = base * 1.35;
        default:
            break;
    }
    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    // Cobertura
    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }

    return cantidad;
};

function UI(){}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max -20;

    const selectYear = document.querySelector('#year');
   
    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }

}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) =>{

    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('mensaje', 'error');

    }else {
        div.classList.add('mensaje','correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);




    UI.prototype.mostrarResultado = (total, seguro) =>{

        const {marca, year, tipo} = seguro;

        let textoMarca; 
        switch(marca){
            case '1':
                textoMarca = 'Americano';
            case '2':
                textoMarca = 'Asiatico';
            case '3':
                textoMarca = 'Europeo';
            default:
                break;
        }

        const div = document.createElement('div');
        div.classList.add('mt-10');

        div.innerHTML = `
        <p class = "header">Tu Resumen</p>
        <p class = "font-bold>Total: <span class="font-normal">$ ${textoMarca} </span></p>
        <p class = "font-bold>Total: <span class="font-normal">$ ${total} </span></p>
        `;

        const resultadoDiv = document.querySelector('#resultado');

        //Mostrar el spinner
        const spinner = document.querySelector('#cargando');
        spinner.style.display = 'block';
        
        setTimeout(() =>{
            spinner.style.display = 'none';
            resultadoDiv.appendChild(div);

        }, 3000);


    }



}

//Instanciando UI
const ui = new UI();
console.log(ui);


document.addEventListener('DOMContentLoaded', () =>{

    ui.llenarOpciones(); //Llena el select con los años
})

eventListeners();

function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccinado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    console.log(tipo);
    
    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'exito');

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if( resultados != null){
        resultados.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype a cotizar
    ui.mostrarResultado(total, seguro);

}