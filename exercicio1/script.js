// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function olaSeuNome (nome){
//     return ("Olá, " + nome)
// }

// let qualNome = prompt("Qual o seu nome?")
// console.log(olaSeuNome(qualNome))


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

const tabuada = (num) => {
    for (let i=num; i<= num*10; i+=num)
    console.log(i)
}
tabuada((Number(prompt("Digite um número."))))


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, 
// ou __arrow functions__ 

//letra a com arrow function:
// const olaSeuNome = (nome) => {
//     return ("Olá, " + nome)
// }

// let qualNome = prompt("Qual o seu nome?")
// console.log(olaSeuNome(qualNome))

// // letra b com function:
// function tabuada (num) {
//     for (let i=num; i<= num*10; i+=num)
//     console.log(i)
// }

// tabuada((Number(prompt("Digite um número."))))
