window.addEventListener('scroll', () =>{

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    console.log(ubicacion);
    if(ubicacion.top < 704){
        console.log("Elemento visible")
    }else{
        console.log("Haz más scroll");
    }

})