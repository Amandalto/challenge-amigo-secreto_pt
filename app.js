let listaDeNomes = [];

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value;

    if (nome === '') {
        alert('Preencha o campo de adicionar um nome!');
    } else {
        listaDeNomes.push(nome);
    }

    atualizarListaAmigos(); 
    limparCampo();
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
