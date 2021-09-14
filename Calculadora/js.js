var operacao = prompt("Qual operação matemática desejas realizar?\n Opção 1: Adição\n Opção 2: Subtração\n Opção 3: Multiplicação\n Opção 4: Divisão")
var n1 = Number(prompt(`Digite o primeiro número: `))
var n2 = Number(prompt(`Digite outro número: `))
 
var soma = (n1 + n2)
var subtracao = (n1 - n2)
var multiplicacao = (n1 * n2)
var divisao = (n1 / n2)

switch (operacao) {
    case "1":
        alert(`O resultado é: ${soma}`)
        break;

    case "2":
        alert(`O resultado é: ${subtracao}`)
        break;

    case "3":
        alert(`O resultado é: ${multiplicacao}`)
        break;

    case "4":
        alert(`O resultado é: ${divisao}`)
        break;
}