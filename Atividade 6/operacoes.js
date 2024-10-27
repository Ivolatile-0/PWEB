let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");

let soma = parseFloat(n1) + parseFloat(n2);
let sub = parseFloat(n1) - parseFloat(n2);
let mult = parseFloat(n1) * parseFloat(n2);
if (n2 == 0) {
    div = "Erro: Divisão por zero!";
    res = "Erro: Não é possível calcular o resto da divisão por zero!";
} else {
    div = n1 / n2;
    res = n1 % n2;
}

document.write("Soma: " + soma + " || ");
document.write("Subtração: " + sub + " || ");
document.write("Multiplicação: " + mult + " || ");
document.write("Divisão: " + div + " || ");
document.write("Resto: " + res);