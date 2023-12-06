import {products} from "./data.js"

function carregar(lista_produtos){

    lista_produtos.forEach(produto => {
        let cod = ` 
                <div class="product" id="${produto.id}">

                <h2>${produto.title}</h2>
                
                <img src="${produto.poster}" alt="${produto.id}">

                <p>${produto.price}</p>
                
            </div>
        `;
        let elem = document.querySelector(".products");
        elem.innerHTML += cod
    });
   
}

let listaCone = products.filter(produto => produto.categories === "cone")
carregar(listaCone)