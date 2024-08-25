const fondo = document.getElementById("saludo");

fondo.addEventListener('click', function(event) {
    if (event.target === fondo) {
        alert("Hola! Soy el div");
    }
});