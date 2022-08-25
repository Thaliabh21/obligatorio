const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

catalogo = [];

function verEnCatalogo(automoviles){
    let catalogoAutomoviles = "";
    for (let automovil of automoviles){ 
        catalogoAutomoviles += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + automovil.image + `" alt="product image" class="img-thumbnail"> </img>
                </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <div class="mb-1">
                                <h4> `+ automovil.name + " - " + automovil.currency + " " + automovil.cost +` </h4> 
                                <p> `+ automovil.description +` </p> 
                            </div>
                            <small class="text-muted">` + automovil.soldCount + ` artículos vendidos </small> 
                        </div>

                    </div>
            </div>
        </div>
        `
        document.getElementById("automoviles").innerHTML = catalogoAutomoviles; 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            catalogo = resultObj.data;
            verEnCatalogo(catalogo.products);
        }
    });
});