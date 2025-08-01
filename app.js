//lista de amigos 
let listaDeNomes = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == ''){
        alert('Preencha o campo de adicionar um nome!')
    }else {
        listaDeNomes.push(nome);

    }
    limparCampo();

}

console.log(listaDeNomes);

function limparCampo (){
    nome = document.querySelector('input');
    nome.value = '';
}
