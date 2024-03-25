// Criar uma função que crie usuário com nome e idade e adicione a um array de usuários

const users = []; // Array de usuários

function createUser() {
    console.log("Digite o nome do usuário e idade: ");
    const input = require('readline-sync').question();
    const [ name, age ] = input.split(' ');
    users.push({ name, age: parseInt(age) });
    console.log('Usuário criado com sucesso!');
    console.log(users);
}

createUser();