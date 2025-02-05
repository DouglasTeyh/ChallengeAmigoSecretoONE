let listaDeNomes = [];

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value.trim();
    if (nome) {
        listaDeNomes.push(nome);
        let li = document.createElement('li');
        li.textContent = nome;
        document.getElementById('listaAmigos').appendChild(li);
        document.getElementById('amigo').value = '';
    }
};

function sortearAmigo(){
    if (listaDeNomes.length > 0) {
        let nomeSorteado = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
        document.getElementById('listaAmigos').innerHTML = '';
        let li = document.createElement('li');
        li.textContent = nomeSorteado;
        document.getElementById('resultado').appendChild(li);
        this.disabled = true;
        listaDeNomes = [];
        document.getElementById('amigo').value = '';
    }
};