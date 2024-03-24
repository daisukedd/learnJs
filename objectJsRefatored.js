// Definição de função para exibir informações de um perfil
function exibirPerfil(perfil) {
    return `Nome: ${perfil.nome}\nIdade: ${perfil.idade}\nAltura: ${perfil.altura}\nNickname: ${perfil.nickName}\n`;
}

// Objeto Literal para o perfil
let pessoa = {
    nome: "Kevin",
    idade: 23,
    altura: 1.63,
    nickName: "daisuke"
}

// Exibir informações do perfil
console.log(exibirPerfil(pessoa));
