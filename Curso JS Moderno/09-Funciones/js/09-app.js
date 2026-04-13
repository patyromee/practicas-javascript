const reproductor = {
    reproducir: function(){
        console.log("Reproduciendo cancion......")
    },
    pausar: function(){
        console.log("pausando...")

    },
    borrar: function(id) {
        console.log("Borrando cancion...")
    },
    crearPlaylist: function(nombre){
        console.log("Crear playlist")
    },
    reproducirPlaylist: function(nombre){
        console.log("Reproduciendo playlist")
    }    
}

reproductor.reproducir();
reproductor.pausar();
reproductor.crearPlaylist("Favoritos");
reproductor.reproducirPlaylist("Favoritos");
