function ingresar() {
    let user = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    
    if (user !== "" && contraseña !== "") {
        sessionStorage.setItem("correo", user);
        location.href = "index.html";
    } else {
        alert("Debe ingresar sus datos para poder continuar");
       }
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("ingresar").addEventListener("click",()=> {
        ingresar();
    });
});
