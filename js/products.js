const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

catalogo = [];
let catID = localStorage.getItem("catID");

function verEnCatalogo(articulos){
    let catalogoArticulos = "";
    for (let articulo of articulos){ 
        catalogoArticulos += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + articulo.image + `" alt="product image" class="img-thumbnail"> </img>
                </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h4> `+ articulo.name + " - " + articulo.currency + " " + articulo.cost +` </h4> 
                                <p> `+ articulo.description +` </p> 
                            </div>
                            <small class="text-muted">` + articulo.soldCount + ` artículos vendidos </small> 
                        </div>

                    </div>
            </div>
        </div>
        `
        document.getElementById("articulos").innerHTML = catalogoArticulos; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL+catID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            catalogo = resultObj.data;
            verEnCatalogo(catalogo.products);
            document.getElementById("nombreCategoria").innerHTML=catalogo.catName;
        }
    });
});