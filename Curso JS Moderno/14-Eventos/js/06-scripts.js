//Event Bublling  es cuando presionas en un elemento y se disparan los otros eventos

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', ()=> {
    e.stopPropagation()
    console.log('click en card');
});

infoDiv.addEventListener('click', () =>{
    console.log('click en info');
});

titulo.addEventListener('click', () => {
    console.log('click en titulo');
});