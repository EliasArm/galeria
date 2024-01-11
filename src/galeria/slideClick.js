import datos from "../datos/fotos";
import { cargarImagen } from "./cargarImagen";

const slideClick = (e) => {
    let nombre, descripcion, ruta;
    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;

    // console.log('Hiciste clic en un slide ', id, categoriaActiva);
    datos.fotos[categoriaActiva].forEach((foto) => {
        if(foto.id === id){
            // console.log(foto);
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });

    // console.log(id, nombre, ruta, descripcion);
    cargarImagen(id,nombre,ruta,descripcion);
};

export default slideClick;