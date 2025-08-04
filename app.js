
//Variável Lista
let listaDeNomes = [];


//Função para adicionar amigo
function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();

    if (nome === '') {
        alert('Preencha o campo de adicionar nome!');
    } else if (listaDeNomes.includes(nome)) {
        alert('Este nome já foi adicionado!')
    }else{
        listaDeNomes.push(nome);
        atualizarListaAmigos(); 
        limparCampo();
    }

}

//Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeNomes.length; i++) {
        lista.innerHTML += `<li>${listaDeNomes[i]}</li>`;
    }
}

//Função para sortear a lista de amigos
function sortearAmigo() {
    if (listaDeNomes.length < 2) {
        alert('Adicione pelo menos 2 nomes no sorteio!');
        return;
    }

    let nomeAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let nomeSorteado = listaDeNomes[nomeAleatorio];

    document.getElementById('resultado').innerHTML = `Nome sorteado: ${nomeSorteado}`;
}


//Função para limpar campo "digite um nome"
function limparCampo() {
    document.querySelector('#amigo').value = '';
}