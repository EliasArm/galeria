
import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';

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

});