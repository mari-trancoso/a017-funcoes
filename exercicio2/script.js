// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas 
// entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function soma(num1, num2){
    let soma = num1 + num2
    return soma
}

let num1 = Number(prompt("Escolha um número."))
let num2 = Number(prompt("Escolha outro número"))
console.log("A soma dos dois números é: " + soma(num1,num2))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número 
// é **maior ou igual** ao segundo.
// function verificaNumero (num1, num2){
//     if (num1 >= num2){
//         console.log("O primeiro número digitado é maior que o segundo.")
//     } else{
//         console.log("O primeiro número é menor que o segundo.")
//     }
// }

// let num1 = Number(prompt("Escolha um número."))
// let num2 = Number(prompt("Escolha outro número"))
// verificaNumero(num1,num2)


// c) Uma função que receba um número e imprima se ele é par ou não
// function numeroPar (num){
//     if (num%2 === 0){
//         console.log("O número é par.")
//     } else{
//         console.log("O número é ímpar.")
//     }
// }

// let num = Number(prompt("Digite um número e descubra se é par ou ímpar."))
// numeroPar(num)


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
// juntamente com uma versão dela contendo apenas letras maiúsculas.

// function tamanhoString (mensagem){
//     console.log(mensagem.length)
//     console.log(mensagem.toUpperCase())
//     return
// }

// let mensagem = prompt("Digite uma mensagem.")
// tamanhoString(mensagem)