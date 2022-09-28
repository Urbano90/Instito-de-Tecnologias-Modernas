

let menu = document.querySelector(".btn-menu-barras ");
let navBar = document.querySelector(".enlaces");
let cerrar = document.querySelector(".btn-menu-cerrar ");
let cuerpo = document.querySelector(".cuerpo");
let  esDispositivoMovil = () => window.innerWidth <= 800;/* cuando es un dispositivo movil y la pantalla es menor a 800px */

// AL PULSAR LA IMG MENU. 
menu.addEventListener("click", function() {
    if(esDispositivoMovil()) {
    navBar.style.display="grid";
    menu.style.display="none";
    cerrar.style.display="block";
    document.querySelector("body").style.overflow="hidden";
  }
});

// AL PULSAR EL LINK DEL NAVBAR.
navBar.addEventListener("click", function() {
    if(esDispositivoMovil()) {
    navBar.style.display="none";
    cerrar.style.display="none";
    menu.style.display="block";
    document.querySelector("body").style.overflow="visible";
    }
});

// AL PULSAR IMG DE CERRR LA IMAGEN.
cerrar.addEventListener("click", function() {
    if(esDispositivoMovil()) {
    navBar.style.display="none";
    menu.style.display="block";
    cerrar.style.display="none";
    document.querySelector("body").style.overflow="visible";
    }
});
// AL PULSAR EN EL CUERPO DEL BODY.
cuerpo.addEventListener("click", function() {
    if(esDispositivoMovil()) {
    navBar.style.display="none";
    menu.style.display="block";
    cerrar.style.display="none";
    document.querySelector("body").style.overflow="visible";
    }
});