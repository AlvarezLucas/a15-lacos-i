// # Exercício 1

// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.

let soma = 0
let valor = 2.50
let pergunta = prompt(`Voce quer uma coxinha?`).toUpperCase

while(pergunta !== `N`){
    if(pergunta === `S`){
        soma = soma + valor
        pergunta = prompt(`Voce quer mais uma coxinha?`).toUpperCase

        }else{
            alert(`Repita sua resposta`)
            pergunta = prompt(`Voce quer mais uma coxinha?`).toUpperCase
            
        }
}

console.log(`O valor a pagar e R$: ${soma}`)