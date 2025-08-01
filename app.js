//lista de amigos 
let listaDeNomes = [];

function adicionarAmigo(){
    let nome = document.getElementById('input').value;
    if (nome == ''){
        alert('Preencha o campo de adicionar um nome')
    }else {
        listaDeNomes.push(nome.value);

    }
    limparCampo();

}

function limparCampo (){
    nome = document.getElementById('input');
    nome = '';
}
