let nome = prompt("Digite seu nome: ");
let n1 = prompt("Digite a primeira nota: ");
let n2 = prompt("Digite a segunda nota: ");
let n3 = prompt("Digite a terceira nota: ");

let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/3;

document.write("Nome: " + nome);
document.write("Nota Final: " + media);