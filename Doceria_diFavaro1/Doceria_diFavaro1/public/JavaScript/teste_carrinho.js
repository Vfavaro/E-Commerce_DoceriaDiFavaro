// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(categories, descricao, preco) {
    // Aqui você pode adicionar a lógica para realmente adicionar o item ao carrinho
    // Por enquanto, vamos apenas exibir uma mensagem no console
    console.log(`Produto adicionado ao carrinho: ${categoria} - ${descricao} - ${preco}`);
}

// Event listener para os botões "Adicionar ao Carrinho"
document.addEventListener('DOMContentLoaded', function () {
    // Botões de exemplo para a categoria Pão de Mel
    const btnPaoDeMel = document.getElementById('adicionar-paodemel');
    if (btnPaoDeMel) {
        btnPaoDeMel.addEventListener('click', function () {
            adicionarAoCarrinho('Pão de Mel', 'Delicioso pão de mel recheado com chocolate', 5.00);
        });
    }

    // Adicione eventos para outros produtos conforme necessário
});
