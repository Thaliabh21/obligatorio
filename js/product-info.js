let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }


let productID = localStorage.getItem("productID");

let arrayProducts = [];

function mostrarImagenes(array){

// DESAFÍO CAROUSEL
    let empty = ""; 

    // let photo = array.images;  // -- Modo anterior sin carousel -- 
    // for (let picture of photo){
    //     empty += ` <img src="` + picture + `" alt="product image" class="img-thumbnail" width=275px> </img> `        
    // }
    empty += 
    `<div class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000" id="carouselExampleControls">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src=`+ array.images[0] +` class="d-block w-100"></img>
            </div>
            <div class="carousel-item">
                <img src=`+ array.images[1] +` class="d-block w-100"></img>
            </div>
            <div class="carousel-item">
                <img src=`+ array.images[2] +` class="d-block w-100"></img>
            </div>
            <div class="carousel-item">
                <img src=`+ array.images[3] +` class="d-block w-100"></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>`
// -- Usé el carousel de Bootstrap crossfade, de a ratos se buggea y no cambia las imágenes (por ejemplo, al recargar la página) --

    return empty;
}

function verProducto(array){
    let inicio = "";
    inicio += `<div> 
        <h2> <br> ` + array.name + ` <button type="button" id="comprar" class="btn btn-success">Comprar</button> </h2>  <br> <hr>        
        <h4> <strong> Precio: </strong> </h4>
        <p> ` + array.currency + " " + array.cost + ` </p>
        <h4> <strong> Descripción: </strong> </h4>
        <p> ` + array.description + ` </p>
        <h4> <strong> Categoría: </strong> </h4>
        <p> ` + array.category + ` </p>
        <h4> <strong> Cantidad de Vendidos: </strong> </h4>
        <p> ` + array.soldCount + ` </p>
        <h4> <strong> Imágenes ilustrativas: </strong> </h4>
        <div> ` + mostrarImagenes(array) + ` </div> <br>
    </div>`

    document.getElementById("info").innerHTML= inicio;
}

let arrayComents = [];

function verComentarios(arreglo){
    let comentarios= "";

    for (let coments of arreglo){
        comentarios+= ` <li class="list-group-item"> 
        <p> <strong> ` + coments.user + ` </strong> - ` + coments.dateTime + ` - ` + mostrarPizzita(coments.score) + ` </p> 
        <p> ` + coments.description + ` </p>
        </li> `
    }
    document.getElementById("coments").innerHTML= comentarios;
}

function mostrarPizzita(slices){ // Resulta ser que ninguna pizza me funcionó, lo mismo con todo lo que probaba..
    let porcion= "";

    for (let i = 0; i < 5; i++){
        if(i<slices){
            porcion+= ` <i class="fa fa-star checked"></i> ` // Finalmente tuve que poner las estrellitas comunes :\
        }else{
            porcion+= ` <i class="fa fa-star"></i> `
        }
    }
    return porcion;
}

function setProductID(id) {
    localStorage.setItem("productID", id);
    location.reload();
}

function mostrarProductosRelacionados(producto){
    let relacionado = "";
    for (let objeto of producto.relatedProducts){
        relacionado += `<div role="button" onclick="setProductID(`+ objeto.id +`)"> 
        <img src="` + objeto.image + `"alt="product image" class="img-thumbnail" width="250px"> </img> 
        <br><br>
        <p><strong>`+ objeto.name +`</strong></p>
        </div>`
    }
    document.getElementById("relatedProducts").innerHTML= relacionado;
}


// DESAFÍO DE AGREGAR PRODUCTOS AL CARRITO
function comprarArticulo(articulo){
    let productosCarritoLocal = JSON.parse(localStorage.getItem("productosCarrito"));
    let productosCarrito = [];

    if (productosCarritoLocal){
        productosCarrito = productosCarritoLocal;
    }

    productosCarrito.push({
        "id": articulo.id,
        "image": articulo.images[0],
        "name": articulo.name,
        "currency": articulo.currency,
        "unitCost": articulo.cost,
        "count": 1
    });

    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    swal.fire({
        customClass: {
            confirmButton: 'swalBtnColor2'},
        title: "",
        text: "Se ha agregado el producto al carrito de manera exitosa",
        icon: "success",
        timer: "3000",
    });
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL+productID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            arrayProducts = resultObj.data
            verProducto(arrayProducts);
            mostrarProductosRelacionados(arrayProducts);
            
            document.getElementById("comprar").addEventListener("click", ()=>{ // -- Parte del desafío --
                comprarArticulo(arrayProducts);
            });
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL+productID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            arrayComents = resultObj.data
            verComentarios(arrayComents);
        }
    });

    

    // DESAFÍO AGREGAR COMENTARIOS
    document.getElementById("enviar").addEventListener("click", function(){
        let fecha = new Date();
        let tiempo = fecha.toLocaleTimeString();
        let date = fecha.toLocaleDateString();

    sessionStorage.setItem("score", document.getElementById("star").value);
    sessionStorage.setItem("description", document.getElementById("newComent").value);
        
    arrayComents.push({
        "product": parseInt(localStorage.getItem("productID")),
        "score": parseInt(document.getElementById("star").value),
        "description": document.getElementById("newComent").value,
        "user": sessionStorage.getItem("correo"),
        "dateTime": tiempo + "-" + date
    })
     	verComentarios(arrayComents);
        document.getElementById("newComent").value = "";
        document.getElementById("star").value = 1;
    })
    //

    document.getElementById("cerrar").addEventListener("click", function() {
        sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
        window.location = "login.html"
    });
});