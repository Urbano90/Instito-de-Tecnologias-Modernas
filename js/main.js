

let menu = document.querySelector(".btn-menu-barras ");
let navBar = document.querySelector(".enlaces");
let cerrar = document.querySelector(".btn-menu-cerrar ");


// AL PULSAR LA IMG MENU. 
menu.addEventListener("click", function() {
    navBar.style.display="grid";
    menu.style.display="none";
    cerrar.style.display="block";
    document.querySelector("body").style.overflow="hidden";
});

// AL PULSAR EL LINK DEL NAVBAR.
navBar.addEventListener("click", function() {
    navBar.style.display="none";
    cerrar.style.display="none";
    menu.style.display="block";
    document.querySelector("body").style.overflow="visible";
});

// AL PULSAR IMG DE CERRR LA IMAGEN.
cerrar.addEventListener("click", function() {
    navBar.style.display="none";
    menu.style.display="block";
    cerrar.style.display="none";
    document.querySelector("body").style.overflow="visible";
});