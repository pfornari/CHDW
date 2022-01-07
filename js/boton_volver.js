// Abrir Hamburguer Menu
const botonHambuguer = document.querySelector(".headerHamburguer");
const menuMobile = document.querySelector("#headerNav");

botonHambuguer.addEventListener("click", function (e) {
    e.preventDefault();
    botonHambuguer.classList.toggle("open");
    menuMobile.classList.toggle("headerNavOpen");
});

menuMobile.addEventListener("click", function() {
    menuMobile.classList.remove("headerNavOpen");
    botonHambuguer.classList.remove("open");
});

// Cerrar Modal Urgencias
const cerrarModal = document.querySelector("#cerrarModalUrgencias");
const modalError = document.querySelector(".modalUrgencias");

cerrarModal.addEventListener("click", function(e) {
    modalError.classList.add("modalUrgenciasClose");
});
