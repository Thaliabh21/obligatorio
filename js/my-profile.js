let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }

    document.addEventListener("DOMContentLoaded", function(e){
        document.getElementById("cerrar").addEventListener("click", function() {
            /*swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor'},
                icon: "warning",
                title: "Está a punto de cerrar sesión",
                text: "Está seguro de que desea cerrar sesión?",
            }) -- En caso de querer poner una alerta antes de salir, pero al redirigirse tan rápido no lograría verla -- */
            sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
            window.location = "login.html"
        });
    });
