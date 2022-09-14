// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações
// básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
// inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function soma(num1, num2){
    soma = num1 + num2
    return soma
}

function subtracao (num1, num2){
    subtracao = num1 - num2
    return subtracao
}

function multiplicacao (num1, num2){
    let multiplicacao = num1 * num2
    return multiplicacao
}

function divisao (num1, num2){
    let divisao = num1 / num2
    return divisao
}

let num1 = Number(prompt("Digite um número."))
let num2 = Number(prompt("Digite outro número."))
console.log(`Os números digitados são: ${num1} e ${num2}.`)
console.log("A soma dos números é:" + soma(num1, num2))
console.log("A subtração dos números é:" + subtracao(num1, num2))
console.log("A multiplicação dos números é:" + multiplicacao(num1, num2))
console.log("A divisão dos números é:" + divisao(num1, num2))