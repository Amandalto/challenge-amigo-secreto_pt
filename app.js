let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();

    if (nome === '') {
        alert('Preencha o campo de adicionar nome!');
    } else {
        listaDeNomes.push(nome);
        atualizarListaAmigos(); 
        
        limparCampo();
    }
}



function limparCampo() {
    document.querySelector('#amigo').value = '';
}

function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeNomes.length; i++) {
        lista.innerHTML += `<li>${listaDeNomes[i]}</li>`;
    }
}

function sortearAmigo() {
    if (listaDeNomes.length < 2) {
        alert('Adicione pelo menos 2 nomes no sorteio!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let nomeSorteado = listaDeNomes[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `Nome sorteado: ${nomeSorteado}`;
}
