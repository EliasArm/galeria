
import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';
import { cargarAnteriorSiguiente } from './cargarImagen';
import carousel from './carousel';

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    // - - - CERRAR GALERIA
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        // console.log(boton.dataset.accion);
        // galeria.classList.remove('galeria--active')
        cerrarGaleria();
    }

    // - - - CAROUSEL SLIDE CLICK
    // console.log(e.target.dataset.id);
    const idImagenCarousel = e.target.dataset.id;
    if(idImagenCarousel){
        // console.log(idImagenCarousel);
        slideClick(e);
    }

    
    // - - - SIGUIENTE IMAGEN
    if(boton?.dataset?.accion === 'siguiente-imagen'){
       cargarAnteriorSiguiente('siguiente');
    }

    // - - - ANTERIOR IMAGEN
    if(boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('anterior');
    }

    // - - - CAROUSEL ADELANTE
    if(boton?.dataset?.accion === 'siguiente-slide'){
        carousel('adelante');
    }

    // - - - CAROUSEL ATRAS
    if(boton?.dataset?.accion === 'anterior-slide'){
        carousel('atras');
    }



});