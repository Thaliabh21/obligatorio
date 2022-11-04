function ingresar() {
    let user = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
    if (user !== "" && contraseña !== "" && contraseña.length >= 6 && emailRegex.test(user)) {
        //swal("¡Datos ingresados correctamente, puede proceder a navegar por el sitio!"); -- modo básico --
        sessionStorage.setItem("correo", user);
        location.href = "index.html";
        /*swal({
            title: "Good job",
            text: "¡Datos ingresados correctamente, puede proceder a navegar por el sitio!",
            icon: "success",
          }); -- Se recarga muy pronto, por ende no la puedo ver -- */ 
    } else {
        // swal("Debe ingresar un correo electrónico válido y contraseña con al menos 6 carácteres para poder continuar");
        swal.fire({
            customClass: {
                confirmButton: 'swalBtnColor'},
            title: "Oops",
            text: "Debe ingresar un correo electrónico válido y contraseña con al menos 6 carácteres para poder continuar",
            icon: "error",
          });
       }
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("ingresar").addEventListener("click",()=> {
        ingresar();
    });
});
