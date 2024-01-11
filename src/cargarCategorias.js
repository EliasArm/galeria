import dataCategorias from './datos/categorias'
// console.log(dataCategorias);

// const categorias = dataCategorias.categorias;
const {categorias} = dataCategorias;
// console.log(categorias);

const contenedorCategorias = document.getElementById('categorias');
// console.log(contenedorCategorias);


categorias.forEach((categoria) => {
    // console.log(categoria);
    const nuevaCategoria = document.createElement('a');
    // console.log(nuevaCategoria);
    const plantilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
    `;
    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    // nuevaCategoria.setAttribute('data-categoria',categoria.id);
    nuevaCategoria.dataset.categoria = categoria.id;

    // contenedorCategorias.insertAdjacentElement('beforeend', nuevaCategoria);
    contenedorCategorias.append(nuevaCategoria);
});