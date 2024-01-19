import data from './../datos/fotos';

const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === id){
            indexImagenActual = index;
        }
    });

    // Marcamos la imagen del carousel como activa
    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0){
        
        //Eliminamos la clase active de cualquier slide.
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }
    
};


const cargarAnteriorSiguiente = (direccion) => {

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenAcual;
    fotos.forEach((foto, index) => {
        if(foto.id === idImagenActual){
            indexImagenAcual = index;
        }
    });;

    if(direccion === 'siguiente'){
        if (fotos[indexImagenAcual +1]){
            // console.log('Cargando imagen siguiente');
            const {id, nombre, ruta, descripcion} = fotos[indexImagenAcual + 1];
            cargarImagen(id, nombre, ruta, descripcion);
        } 
    } else if (direccion === 'anterior'){
        if(fotos[indexImagenAcual -1]){
            // console.log('Cangando imagen anterior')
            const{id, nombre, ruta, descripcion} = fotos[indexImagenAcual - 1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
};

export {cargarImagen, cargarAnteriorSiguiente};