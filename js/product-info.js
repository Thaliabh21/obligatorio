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

    let empty = ""; 

    let photo = array.images;
    for (let picture of photo){
        empty += ` <img src="` + picture + `" alt="product image" class="img-thumbnail" width=275px> </img> `        
    }
    return empty;
}

function verProducto(array){
    let inicio = "";
    inicio += `<div> 
        <h2> <br> ` + array.name + ` </h2> <br> <hr>        
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
        relacionado += `<div onclick="setProductID(`+ objeto.id +`)"> 
        <img src="` + objeto.image + `"alt="product image" class="img-thumbnail" width="250px"> </img> 
        <br><br>
        <p><strong>`+ objeto.name +`</strong></p>
        </div>`
    }
    document.getElementById("relatedProducts").innerHTML= relacionado;
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL+productID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            arrayProducts = resultObj.data
            verProducto(arrayProducts);
            mostrarProductosRelacionados(arrayProducts);
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL+productID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            arrayComents = resultObj.data
            verComentarios(arrayComents);
        }
    });

    document.getElementById("cerrar").addEventListener("click", function() {
        sessionStorage.removeItem("correo"); // Elimino el usuario guardado anteriormente en el almacenamiento de sesión.
        window.location = "login.html"
    });
});