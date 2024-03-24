// Objeto Literal
let pessoa = {
    nome: "Kevin",
    idade: 23,
    altura: 1.63,
    nickName: "daisuke"
}

console.log(pessoa.nome);

let myProfile = {
    pessoaFunction: function() {
        return `Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nAltura: ${pessoa.altura}\nNickname: ${pessoa.nickName}\n`;
    }
}

console.log(myProfile.pessoaFunction());
