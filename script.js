let pedido = {
    hamburguer: { quantidade: 0, preco: 15.00 },
    batata: { quantidade: 0, preco: 8.00 },
    refrigerante: { quantidade: 0, preco: 5.00 }
};

function alterarQuantidade(item, quantidade) {
    pedido[item].quantidade += quantidade;
    if (pedido[item].quantidade < 0) pedido[item].quantidade = 0;
    document.getElementById(`quantidade-${item}`).innerText = pedido[item].quantidade;
}

function confirmarPedido() {
    const itensSelecionados = document.getElementById('itens-selecionados');
    const totalPedido = document.getElementById('total-pedido');
    const whatsappLink = document.getElementById('enviar-whatsapp');
    itensSelecionados.innerHTML = '';
    let total = 0;
    let mensagem = "Resumo do Pedido:%0A";

    for (const item in pedido) {
        if (pedido[item].quantidade > 0) {
            const div = document.createElement('div');
            const valorItem = pedido[item].quantidade * pedido[item].preco;
            div.innerText = `${item.charAt(0).toUpperCase() + item.slice(1)}: ${pedido[item].quantidade} x R$ ${pedido[item].preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}`;
            itensSelecionados.appendChild(div);
            mensagem += `${item.charAt(0).toUpperCase() + item.slice(1)}: ${pedido[item].quantidade} x R$ ${pedido[item].preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}%0A`;
            total += valorItem;
        }
    }

    totalPedido.innerHTML = `<h2>Total: R$ ${total.toFixed(2)}</h2>`;
    mensagem += `Total: R$ ${total.toFixed(2)}`;
    whatsappLink.href = `https://api.whatsapp.com/send?phone=5511950912509&text=${mensagem}`;
    
    document.getElementById('menu').style.display = 'none';
    document.getElementById('resumo').style.display = 'block';
}

function voltar() {
    document.getElementById('resumo').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}
