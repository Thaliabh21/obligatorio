const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const ORDER_ASC_BY_COST = "↑$";
const ORDER_DESC_BY_COST = "↓$";
const ORDER_BY_SOLD_COUNT = "Cant.";
let currentSortCriteria = undefined;
let minCost = undefined;
let maxCost = undefined;
let catalogoArticulos = [];

let user = sessionStorage.getItem("correo");

    if (user !== null){
        document.getElementById("correo").innerHTML=user;    
    } else {
        alert("Debe iniciar sesión para poder continuar")
        location.href="login.html";
    }

function sortProducts(criterio, array){
let result = [];
if (criterio === ORDER_ASC_BY_COST)
{
    result = array.sort(function(a, b) {
        if ( a.cost < b.cost ){ return -1; }
        if ( a.cost > b.cost ){ return 1; }
        return 0;
    });
}else if (criterio === ORDER_DESC_BY_COST){
    result = array.sort(function(a, b) {
        if ( a.cost > b.cost ){ return -1; }
        if ( a.cost < b.cost ){ return 1; }
        return 0;
    });
}else if (criterio === ORDER_BY_SOLD_COUNT){
    result = array.sort(function(a, b) {
        let aCount = parseInt(a.soldCount);
        let bCount = parseInt(b.soldCount);

        if ( aCount > bCount ){ return -1; }
        if ( aCount < bCount ){ return 1; }
        return 0;
    });
}

return result;
}

function verEnCatalogo(){
    let listaAMostrar = "";
    for (let articulo of catalogoArticulos){ 
        
        if (((minCost == undefined) || (minCost != undefined && parseInt(articulo.cost) >= minCost)) &&
           ((maxCost == undefined) || (maxCost != undefined && parseInt(articulo.cost) <= maxCost))){

    listaAMostrar += `
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
       }

    }

    document.getElementById("articulos").innerHTML = listaAMostrar; 
}

function sortAndShowProducts(sortCriteria, catalogo){
    currentSortCriteria = sortCriteria;

    if (catalogo != undefined){
        catalogoArticulos = catalogo;
    }

    catalogoArticulos = sortProducts(currentSortCriteria, catalogoArticulos);
    verEnCatalogo(catalogoArticulos);
}

let catID = localStorage.getItem("catID");

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL+catID+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {   
            catalogoArticulos = resultObj.data
            document.getElementById("nombreCategoria").innerHTML=catalogoArticulos.catName;
            
            catalogoArticulos = resultObj.data.products;
            verEnCatalogo(catalogoArticulos);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_SOLD_COUNT);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCostMin").value = "";
        document.getElementById("rangeFilterCostMax").value = "";

        minCost = undefined;
        maxCost = undefined;

        verEnCatalogo(catalogoArticulos);
    });

    document.getElementById("rangeFilterCost").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por precio los productos
        minCost = document.getElementById("rangeFilterCostMin").value;
        maxCost = document.getElementById("rangeFilterCostMax").value;

        if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        verEnCatalogo(catalogoArticulos);
    });
});