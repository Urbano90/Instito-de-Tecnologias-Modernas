const btnDepartamentos = document.getElementById('btn-departamentos');
const grid = document.getElementById('grid');
const CerrarBtnDepartamentos = document.getElementById('cerrar-btn-departamentos');
const contenedor = document.querySelector("main");
const contenedorEnlacesnav = document.querySelector('#menu .contenedor-enlaces-nav');
const contenedorSubcategorias = document.querySelector('#grid .contenedor-subcategorias');
const btnCerrarMenu = document.getElementById('btn-menu-cerrar');   /* const cerrar menu */
const  esDispositivoMovil = () => window.innerWidth <= 800;   /* cuando es un dispositivo movil y la pantalla es menor a 800px */



btnDepartamentos.addEventListener('click', () => { /* cuando pasamos el cursor en la grid queremos mostrarlo activo*/
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grid al pasar el cursor*/
    grid.classList.add('activo');
    btnDepartamentos.style.display="none";
    CerrarBtnDepartamentos.classList.add("activo");
   }
});

CerrarBtnDepartamentos.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grid al pasar el cursor*/
    grid.classList.remove('activo');
    btnDepartamentos.style.display="flex";
    CerrarBtnDepartamentos.classList.remove("activo");
   }
});


contenedor.addEventListener('click', () => {
  if(!esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grid al pasar el cursor*/
    grid.classList.remove('activo');
    btnDepartamentos.style.display="flex";
    CerrarBtnDepartamentos.classList.remove("activo");
   }
});


/* Aquí vamos a empezar a filtrar todos los elementos de la subcategoria para poder mostrarlos cuando pasamos el cursor en las diferentes categorias*/
document.querySelectorAll('#menu .categorias a').forEach ((elemento) => {  /* Accedemos a todos los enlaces de las categorias*/
  elemento.addEventListener('mouseenter', (e) => {  /* Por cada elemento le pasamos un eventLisstener para mostrar los elementos */
      if(!esDispositivoMovil()) {
        document.querySelectorAll('#menu .subcategoria').forEach ((categoria) =>{
          categoria.classList.remove('activo');
          if(categoria.dataset.categoria == e.target.dataset.categoria){
            categoria.classList.add('activo');
          }
        });
      }
  });
});


/* trabajamos para dispositivos móviles */
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {  /* hacemos aparecer y desaparecer el menu de la izquierda cuando hacemos click al icono menu */
  e.preventDefault();
  if(contenedorEnlacesnav.classList.contains('activo')){
    contenedorEnlacesnav.classList.remove('activo');   /* aparecer el menu */
    document.querySelector('body').style.overflow = 'visible'; /* activamos el scroll cuando el menu no está activo */
  }else {
    contenedorEnlacesnav.classList.add('activo');  /* desaparecer el menu */
    document.querySelector('body').style.overflow = 'hidden'  /* Desactivamos el scroll cuando el menu está activo */
  }
});

/* Todos los departamentos para mostrar en pantalla cuando se hace un click */
btnDepartamentos.addEventListener('click', (e) => {
  e.preventDefault();
  grid.classList.add('activo');
  btnCerrarMenu.classList.add('activo');
});

contenedor.addEventListener('click', () => {
  if(esDispositivoMovil()) {    /* si no es dispositivo movil menor de 800px no muestra la grid al pasar el cursor*/
    grid.classList.remove('activo');
    btnDepartamentos.style.display="flex";
    CerrarBtnDepartamentos.classList.remove("activo");
   }
});
/////***Al hacer click en el boton cerrar activamos el escroll******/
btnCerrarMenu.addEventListener('click', (e) => {
  document.querySelector('body').style.overflow = 'visible';
});


/* Boton de regresar en el menu de categorías */
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
  e.preventDefault();
  grid.classList.remove('activo');

});



document.querySelectorAll('#menu .categorias a').forEach ((elemento) => {
  elemento.addEventListener('click', (e) => {
    if(esDispositivoMovil()) {
      contenedorSubcategorias.classList.add('activo')
      document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
        categoria.classList.remove('activo');
          if(categoria.dataset.categoria == e.target.dataset.categoria) {
            categoria.classList.add('activo');
          }
      })
    }
  })
})


/* Boton regresar subcategorias */
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo');

   });
});


/* Aqui programamos el boton de cerrar*/
btnCerrarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('#menu .activo').forEach((elemento) => {
      elemento.classList.remove('activo');
      btnCerrarMenu.classList.remove('activo');
  });
  document.querySelector('body').style.overflow = 'visible';  /*en esta linea activamos el scroll que hemos del body que hemos inhabilitado */
});