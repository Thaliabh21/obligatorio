let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        // swal.fire({
        //     customClass: {
        //         confirmButton: 'swalBtnColor'},
        //     icon: "warning",
        //     title: "Debe iniciar sesión para poder continuar",
        // })
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


// DESAFÍO DE CARGAR FOTO DE PERFIL
    let fileReader = new FileReader();

    // const img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/wAALCAAwADABAREA/8QAHAABAAMAAgMAAAAAAAAAAAAACAAHCQIDBAYK/8QANBAAAQMDAwIEAgkFAQAAAAAAAgEDBAUGBwgREgAhCRMUIhgxCkFWV4GVltLTFiMyUWFx/9oACAEBAAA/ANw5+B8a0qOr0qzLGjND8zdpEUBT8VDoPZf1vW9eniERdN2B8L45uq56dDKdc9x1ykA3RqCiNC4jOzQIZnsbfJeQ7eZsKOEJCic0+Wzb18nUrevzEdgWlftBQXJcGHFizoVQjGpI1NiOq0BkyagYqLgCbZgQqipxM7M+HTH32Es38ljfs6nw6Y++wlm/ksb9nU+HTH32Es38ljfs69TyJpTO/wDJNQrP9U1CJTapHbGRT1jjJUHg3FTaN1SFtsgQEVpG+KkKkvcl6AOvy3LR0Ca8rGnUV2tz52R7fuM26NRaTFGbEnox6kJw+nFnzAN1gQJHhM+RIQuCiOATA0m5D+KLVbfeS4cJYlu0CiQrNpj6OC6NQeRxyVNNDEtlFtw2m07brxVe3LbpOdTqdcXXRZbIzIQAE3IlXZBT/a9fO7qP1M13WPreyLqLiuxm7Kx/TqvAtVpmoto5IZitOUymEexGrKv1GesgxXgisqB8dm1NdiLRyJifwgfD1suHf94wbYtqy6FHjHIqEpZEypSVHm75QInmyXnHScLiAKRKSrt8+hrSPpQkHMC1qpWDju24FuUjYor173qFLqFcTdxODUWJHlrHP2IqJJIEVDRU7IW1+Ya+kA4UuW0Lan5Fmx8WyblmHTx9ZUWahDgvin+Ml5n3RRVeyHJbaFVVE337dOKkVeJX6XHnQJUebCmNi8xIjuI40+BJuJCQqqEKp3RUXZeqE8WG+avjbwy89VygE+3WYFi1YojrKbmwaxXB81PrThyUt07ogqvWMtKfxXpZsbI1czLka5KtbNr3HQqVQYtvymq7Ir8OPSlFuisOuGrTJsrPdJwUVCaaeYLinICRqeIPj/AmZMFVSz6rRHrgGDd1Njvvy70fqvoatIERjiINSCcJvhJQUEOKARoiB32UUV7RphfTJNuGkRbiuuJfFJrB2645apMRmnpDPkSDJx6bE7g2MhlEMSVFEzQtkVRQ55z0mUCREudpm4Ly9bdLrc2q1CHVWqlDmSGeSNkQ7KZq2hEnETQN9k+pETTH6NXf906fLWj4fr+TKdflm1VopNpU91omqpbRijjjzKpzcFYp8T9vJCZdHZQFHU61iyNj+k5Yx9XbWr0UZ1EuSnv0yoRyVUR+O82Tbgbp3TcSVN06w31HaP8AOvhc3rRciS8pXFVmscTEotmVCNbqVRgqLwebjjUGl3Fx5UlPC84ichVto/MH2cRhUcoScE6VaueFn6Qzdt8Xk9EvO66FUPS02XFR12pR6f6Se1tDkR5HE48mA9yTyt1VfZ0lNHdsXDroxdfVMpMan3kxT5lKvyuxK3BkneEefL4Q6iEFll3adD8qOjZmrykRMh2Q9k6sjT1oMo2c6RkekHSLuSdQ0GDa9KjMuLPpswVc5NSjbRWUIEaHnzMWx84N1JVVEbfg9+G2OAZM3Jd1Til3rJF2lBTfLERoYhwAwdVE/uSgUXG1NDMOBLwJRLsrvjRw597ONP1RB/l66Kjq/wAKViC7Fl5RxbKjPioOsvXJANtwV+aKKubKn/vRB13adtHWf7Qj8rUwXkKclQSacMcmNWsjRCyaI8DsZ33O/IBFUQfdupCidVhg7S5gmDddpz7bYwdgCm2Sb7cQJGQY10z5cWUvOVEJg5TsNWTPiaq4pqLzaGIrtuWhVG1b4Rt6mMw4OUMVw4rA8W2mLjp7TYJ/wRcRE/BOvJ+NHDn3s4z/AFPB/l6//9k="

    // function fotoPorDefecto(){
    //     document.getElementById("foto").value = img; -- pruebas... --
    // }

    function subirFoto(event){
        let perfil = event.target.files[0];

        fileReader.readAsDataURL(perfil);

        fileReader.addEventListener("load", function(event){
            let base64 = event.target.result;
            let spanFoto = document.getElementById("foto");
            spanFoto.src = base64;

            sessionStorage.setItem("archivo", base64);
        });
        //sessionStorage.setItem("archivo", perfil);
    }

    function cargarFoto(){
        let imagenCargada = sessionStorage.getItem("archivo");
        if (imagenCargada != null){
            document.getElementById("foto").src = imagenCargada;
        } else {
            document.getElementById("foto").src = "./img/perfilDefecto.jpg";
        }
    }

    document.addEventListener("DOMContentLoaded", function(e){

        //document.getElementById("email").value = sessionStorage.getItem("correo"); // Solo trae el email.
        traerDatos(); // Pido que traiga todos los datos de una, en vez de solo el email.
        cargarFoto();
        
        document.getElementById("archivo").addEventListener("change", subirFoto);
            // subirFoto(); 
            // cargarFoto();
        //});
       
        // fotoPorDefecto();  -- pruebas --

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
                timer: "5000",
            })  -- En caso de querer poner una alerta antes de salir, pero al redirigirse tan rápido no lograría verla -- */
            
            sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
            sessionStorage.removeItem("nombre");
            sessionStorage.removeItem("nombre2");
            sessionStorage.removeItem("apellido1");
            sessionStorage.removeItem("apellido2");
            sessionStorage.removeItem("telefono");
            sessionStorage.removeItem("archivo"); // -- Remuevo la foto del desafío --
            window.location = "login.html"
        });
    });