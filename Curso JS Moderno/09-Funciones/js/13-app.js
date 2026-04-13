const reproductor = {
    reproducir: id => console.log("Reproduciendo cancion......"),
    pausar: () => console.log("pausando....."),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la  playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log("Reproduciendo playlist")
    }    
}

reproductor.reproducir();
reproductor.pausar();
reproductor.crearPlaylist("Favoritos");
reproductor.reproducirPlaylist("Favoritos");
