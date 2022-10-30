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

let articulos=[];

function cambiarCantidad(){
    let cant= document.getElementById("cantidad");
        articulo.count = cant.value; // Le asigno a la propiedad articulo.count, el valor introducido en el input.
        mostrarCarrito(articulos);
        TiposDeEnvios();
}

let subtotal=0;

function mostrarCarrito(articulos){
    let cart="";
    for (articulo of articulos){
       subtotal = articulo.count * articulo.unitCost;
            cart+=`<tr>
            <td><img src="` + articulo.image + `"alt="product image" class="img-thumbnail" width="100px"></img></td>
            <td style="padding: 25px;">` + articulo.name + `</td>
            <td style="padding: 25px;">` + articulo.currency + " " + articulo.unitCost + `</td>
            <td style="padding: 25px;">` + `<input onchange="cambiarCantidad()" id="cantidad" type="number" min="1" value=` + articulo.count + ` style="width:70px;" ></input>` + `</td>
            <td style="padding: 25px;"><strong>` + articulo.currency + " " + subtotal + `</strong></td>
            </tr>`
    }
    document.getElementById("subtotal").innerHTML= "USD " + subtotal;
    document.getElementById("cart").innerHTML= cart;
}

let porcentajeEnvio = 0;

function calcularPorcentaje(porcentaje){
   porcentajeEnvio= ((subtotal*porcentaje)/100);
}

function mostrarCostos(porcentaje, etiquetaEnvio, etiquetaTotal){
    calcularPorcentaje(porcentaje);
    totalConEnvio = subtotal+ porcentajeEnvio;

        document.getElementById(etiquetaEnvio).innerHTML = "USD " + porcentajeEnvio;
        document.getElementById(etiquetaTotal).innerHTML = "USD " + totalConEnvio;
}

function TiposDeEnvios(){
    let botonPremium = document.getElementById("premium").checked;
    let botonExpress = document.getElementById("express").checked;
    let botonStandard = document.getElementById("standard").checked;

    if (botonPremium){
    mostrarCostos(15, "costoEnvio", "totalCost");   
    }else if(botonExpress){
        mostrarCostos(7, "costoEnvio", "totalCost");   
    }else if (botonStandard){
        mostrarCostos(5, "costoEnvio", "totalCost");   
    }

    if (botonPremium || botonExpress || botonStandard){
        document.getElementById("metodoEnvioSeleccionado").value = "ok";
    }
}

//FUNCION QUE TIENE TODAS LAS ETIQUETAS Y LE PASO POR PARAMETRO CUAL HABILITO Y CUAL DESHABILITO
function habilitarDeshabilitar(variable1, variable2){
    document.getElementById("numeroTarjeta").disabled = variable1;
    document.getElementById("numeroTarjeta").value = "";
    document.getElementById("codigo").disabled = variable1;
    document.getElementById("codigo").value = "";
    document.getElementById("vencimiento").disabled = variable1;
    document.getElementById("vencimiento").value = "";
    document.getElementById("numeroCuenta").disabled = variable2;
    document.getElementById("numeroCuenta").value = "";
}

let campoNumTarjeta;
let campoCodigo;
let campoVencimiento;
let campoNumCuenta;

function validarCampos(){
    campoNumTarjeta = document.getElementById("numeroTarjeta").value> 0;
    campoCodigo = document.getElementById("codigo").value> 0;
    campoVencimiento = document.getElementById("vencimiento").value !== "";
    campoNumCuenta = document.getElementById("numeroCuenta").value> 0;

    if (campoNumTarjeta && campoCodigo && campoVencimiento){
        document.getElementById("metodoPagoSeleccionado").value = "ok";
    }else if (campoNumCuenta){
        document.getElementById("metodoPagoSeleccionado").value = "ok";
    }else{
        document.getElementById("metodoPagoSeleccionado").value = "";
    }
}

function cambiarMetodoDePago(){

    if (document.getElementById("tarjeta").checked){
    // LLAMO A FUNCION Y LE PASO POR PARAMETRO QUE HABILITO Y QUE DESHABILITO
        habilitarDeshabilitar(false, true);
        document.getElementById("metPago").innerHTML = "Pago con tarjeta de credito";
        document.getElementById("metodoPagoSeleccionado").value = "";
    
    }else if(document.getElementById("transferencia").checked) {
    // LLAMO A FUNCION Y LE PASO POR PARAMETRO QUE HABILITO Y QUE DESHABILITO
        habilitarDeshabilitar(true, false);
        document.getElementById("metPago").innerHTML = "Pago con transferencia bancaria";
        document.getElementById("metodoPagoSeleccionado").value = "";
    }  
}

/*Inutilizable, por validaciones de Bootstrap*/
function comprar(){/*

// CAMPO CALLE VACIO
    if (document.getElementById("calle").value === ""){
    document.getElementById("pCalle").style.visibility = 'visible';
    document.getElementById("calle").style.borderColor = 'red';
    }else{
    document.getElementById("pCalle").style.visibility = 'hidden';
    document.getElementById("calle").style.borderColor = 'greenyellow';
    }

// CAMPO NUMERO VACIO
    if(document.getElementById("numero").value===""){
        document.getElementById("pNumero").style.visibility = 'visible';
        document.getElementById("numero").style.borderColor= 'red';
    }else{
        document.getElementById("pNumero").style.visibility = 'hidden';
        document.getElementById("numero").style.borderColor = 'greenyellow';
    }
2
// CAMPO ESQUINA VACIO
    if(document.getElementById("esquina").value===""){
        document.getElementById("pEsquina").style.visibility = 'visible';
        document.getElementById("esquina").style.borderColor= 'red';
    }else{
        document.getElementById("pEsquina").style.visibility = 'hidden';
        document.getElementById("esquina").style.borderColor = 'greenyellow';
    }

// Checkear que haya un input seleccionado en la modal
    if (document.getElementById("tarjeta").checked===true || document.getElementById("transferencia").checked===true){
        document.getElementById("parrafoOculto").style.visibility = 'hidden';
    }else{
        document.getElementById("parrafoOculto").style.visibility = 'visible';
    }

    if (document.getElementById("esquina").value!=="" && 
         document.getElementById("numero").value!=="" &&
         document.getElementById("calle").value === "" &&
         (document.getElementById("tarjeta").checked!==true || 
          document.getElementById("transferencia").checked!== true)){
             showAlertSuccess();
             location.reload();
    }*/
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + "25801.json").then(function(resultObj){
        if(resultObj.status === "ok"){
            articulos=resultObj.data.articles;
            mostrarCarrito(articulos);
        }
    })

        var forms = document.querySelectorAll('.needs-validation')
      
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    showAlertSuccess()
                }
      
              form.classList.add('was-validated')
            }, false)
          })  
});