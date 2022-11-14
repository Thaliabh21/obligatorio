let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }
    
    function guardarDatos(){
        let nombre = document.getElementById("nombre").value;
        let nombre2 = document.getElementById("nombre2").value;
        let apellido = document.getElementById("apellido1").value;
        let apellido2 = document.getElementById("apellido2").value;
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("nombre2", nombre2);
        sessionStorage.setItem("apellido1", apellido);
        sessionStorage.setItem("apellido2", apellido2);
        sessionStorage.setItem("correo", email);
        sessionStorage.setItem("telefono", telefono);
    }

    function traerDatos(){
        document.getElementById("nombre").value = sessionStorage.getItem("nombre");
        document.getElementById("nombre2").value = sessionStorage.getItem("nombre2");
        document.getElementById("apellido1").value = sessionStorage.getItem("apellido1");
        document.getElementById("apellido2").value = sessionStorage.getItem("apellido2");
        document.getElementById("email").value =  sessionStorage.getItem("correo");
        document.getElementById("telefono").value = sessionStorage.getItem("telefono");
    }

    // const img = "https://i.pinimg.com/564x/78/87/06/78870686e07270b31641223821a9076b.jpg"

    // function fotoPorDefecto(){
    //     document.getElementById("foto").value = img;
    // }

    function subirFoto(){
        let perfil = document.getElementById("archivo").value;
        sessionStorage.setItem("archivo", perfil);
    }

    function cargarFoto(){
        document.getElementById("foto").value = sessionStorage.getItem("archivo");

    }

    document.addEventListener("DOMContentLoaded", function(e){

        //document.getElementById("email").value = sessionStorage.getItem("correo"); // Solo trae el email.
        traerDatos(); // Pido que traiga todos los datos de una, en vez de solo el email.
        subirFoto();
        cargarFoto();
        //fotoPorDefecto();

        var forms = document.querySelectorAll('.needs-validation')
  
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    swal.fire({ // -- Si el formulario no está validado, tiro alerta de error --
                        customClass: {
                            confirmButton: 'swalBtnColor'},
                        title: "Oops",
                        text: "Nombre, Apellido e Email son requeridos",
                        icon: "error",
                      });
                }else{
                    guardarDatos();
                    swal.fire({ // -- De lo contrario, alerta success --
                        customClass: {
                            confirmButton: 'swalBtnColor2'},
                        title: "Datos guardados",
                        text: "Su información fue guardada con éxito",
                        icon: "success",
                      });
                }
      
              form.classList.add('was-validated')
            }, false)
          })  

        document.getElementById("cerrar").addEventListener("click", function() {

            /*swal.fire({
                customClass: {
                    confirmButton: 'swalBtnColor'},
                icon: "warning",
                title: "Está a punto de cerrar sesión",
                text: "Está seguro de que desea cerrar sesión?",
            }) -- En caso de querer poner una alerta antes de salir, pero al redirigirse tan rápido no lograría verla -- */
            
            sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
            sessionStorage.removeItem("nombre");
            sessionStorage.removeItem("nombre2");
            sessionStorage.removeItem("apellido1");
            sessionStorage.removeItem("apellido2");
            sessionStorage.removeItem("telefono");
            window.location = "login.html"
        });
    });
