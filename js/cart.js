document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("cerrar").addEventListener("click", function() {
    sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
    window.location = "login.html"
    });
});