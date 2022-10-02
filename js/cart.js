let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("cerrar").addEventListener("click", function() {
    sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
    window.location = "login.html"
    });
});