let user = "daisuked" //string é imutável
user[1] = "z"
console.log(user) // daisuked

// const passUser = [1,2,3,4,5]
// passUser.length = 0
// console.log(passUser) // []]

const passUser = [1,2,3,4,5]
passUser[100] = undefined
console.log(passUser, passUser.length)