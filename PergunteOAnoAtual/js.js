var dataNascimento
var dataAtual
var aniversario

dataNascimento = Number(prompt("Em qual ano você nasceu?"))

dataAtual = Number(prompt("Em qual ano estamos?"))

aniversario = confirm("Já fez aniversário neste ano?")

if(aniversario == true) {
    window.alert(`Você tem ${(dataAtual - dataNascimento)} anos de idade`)
} else {
    alert(`Você tem ${(dataAtual - dataNascimento -1)} anos de idade`)
}