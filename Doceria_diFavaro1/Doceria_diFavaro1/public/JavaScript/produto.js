import {products} from "./data.js"

let container = document.querySelector(".products");

function carregar(products, container){
    products.forEach(produto => {
        let cod = ` 
                <div class="product" id="${produto.id}">

                <h2>${produto.title}</h2>
                
                <img src="${produto.poster}" alt="${produto.id}">

                <p>${produto.price}</p>
                
            </div>
        `;
 
        container.innerHTML += cod
    });
   
}

carregar(products, container)
filtrarCategoria(products, container, carregar)

function filtrarCategoria(listaProdutos, container, carregar){
    let filtros = document.querySelectorAll("li.categorie")
    filtros.forEach(filtro => filtro.addEventListener('click', (e) => {
        let categoriaSelecionada = e.target.id
        let prodFiltrados = listaProdutos.filter(produto => produto.categories == categoriaSelecionada)
        container.innerHTML = ""
        carregar(prodFiltrados, container)
    }))
}