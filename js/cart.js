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
}

function mostrarCarrito(articulos){
    let cart="";
    for (articulo of articulos){
        let resultado = articulo.count * articulo.unitCost;
            cart+=`<tr>
            <td><img src="` + articulo.image + `"alt="product image" class="img-thumbnail" width="100px"></img></td>
            <td style="padding: 25px;">` + articulo.name + `</td>
            <td style="padding: 25px;">` + articulo.currency + " " + articulo.unitCost + `</td>
            <td style="padding: 25px;">` + `<input onchange="cambiarCantidad()" id="cantidad" type="number" min="1" value=` + articulo.count + ` style="width:70px;" ></input>` + `</td>
            <td style="padding: 25px;"><strong>` + articulo.currency + " " + resultado + `</strong></td>
            </tr>`
    }
    document.getElementById("cart").innerHTML= cart;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL + "25801.json").then(function(resultObj){
        if(resultObj.status === "ok"){
            articulos=resultObj.data.articles;
            mostrarCarrito(articulos);
        }
    })
});
