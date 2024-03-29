import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
// console.log(contenedorCategorias);
const galeria = document.getElementById('galeria');
// console.log(galeria);

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    // console.log(e.target.closest('a'));

    if(e.target.closest('a')){
        // console.log('Ejecuta..');
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden';

        const categoriaActiva = e.target.closest('a').dataset.categoria;
        // console.log(categoriaActiva);

        galeria.dataset.categoria = categoriaActiva;

        
        // console.log(dataFotos);

        const fotos = dataFotos.fotos[categoriaActiva];
        // console.log(fotos);

        const carrusel = galeria.querySelector('.galeria__carousel-slides');
        
        const {id,nombre,ruta,descripcion} = fotos[0];
        cargarImagen(id,nombre,ruta,descripcion);
        
        carrusel.innerHTML = '';

        fotos.forEach((foto) => {
            // console.log(foto);
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img
                        class="galeria__carousel-image"
                        src="${foto.ruta}"
                        data-id="${foto.id}"
                        alt=""
                    />
                </a>
            `;
            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
    }
});