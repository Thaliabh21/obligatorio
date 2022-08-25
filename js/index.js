document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }
});