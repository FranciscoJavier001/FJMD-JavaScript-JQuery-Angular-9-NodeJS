'use strct'

// Localstorage

// Comprobar disponibilidad del Localstorage
if (typeof(Storage) !== 'undefined') {
    console.log("Localstorage Disponible");
} else {
    console.log("Incompatible con Localstorage");
}

// Guardar datos
localStorage.setItem("titulo", "Curso de Symfony");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos
var usuario = {
    nombre: "Francisco Javier Martinez",
    email: "francisco_javis@hotmail.com",
    web: "@franciscojavis"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web + " - " + userjs.nombre);

localStorage.clear