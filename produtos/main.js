'use strict'

const db = [
    {
        id: 1, 
        nome: 'Microfone Kingston', 
        descricao: "Microfone Kingston HyperX QuadCast USB", 
        avaliacao: 5,  
        preco: 999.99, 
        parcelamento: 'ou 10x de 99.99 sem juros',
        imagem: './img/microfone_kingston_hyperx_quadcast.png'
    },
    {
        id: 2, 
        nome: 'Monitor AOC', 
        descricao: "Monitor Gamer Curvo 240Hz Full HD 27” AOC", 
        avaliacao: 3,  
        preco: 2500, 
        parcelamento: 'ou 10x de 250 sem juros',
        imagem: './img/monitor_gamer_curvo.png'
    },
    {
        id: 3, 
        nome: 'Mouse Logitech', 
        descricao: "Mouse Sem Fio M170 Nano LOGITECH Prata", 
        avaliacao: 2,  
        preco: 350, 
        parcelamento: 'ou 10x de 35 sem juros',
        imagem: './img/mouse.png'
    }
]

const definirAvaliacao = (qtdeCheias) => {
    const qtdeVazias = 5 - qtdeCheias

    return "&starf;".repeat(qtdeCheias) + "&star;".repeat(qtdeVazias)
}

const criarCard = (produto) => {
    //Criando o elemento
    const card = document.createElement('div')
    //Colocando classe no elemento
    card.classList.add('card')
    //Passando o código HTML
    card.innerHTML = `
        <div class="card-image-container">
        <img src="${produto.imagem}" alt="mouse" class="card-image">
        </div>
        <span class="card-descricao">${produto.descricao}</span>
        <span class="card-avaliacao">
            ${definirAvaliacao(produto.avaliacao)}
        </span>
        <span class="card-preco">${produto.preco}</span>
        <span class="card-parcelamento">${produto.parcelamento}</span>
    `
    //Retorna o elemento
    return card
}

const carregarProdutos = (produtos) => {
    const container = document.querySelector('.card-container')
    const cards = produtos.map(criarCard)

    //Aqui só aceita objeto, array não!
    container.replaceChildren(...cards)
    //(...) -> Pega o array e espalha
}

carregarProdutos(db)