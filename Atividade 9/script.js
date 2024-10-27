let Maior = function(x,y,z){
    let maior = Math.max(x,y,z);
    return maior;
}

let Ordem = function(x,y,z){
    let lista = [x,y,z];
    
    lista.sort(function(a,b){
        return a - b
    });

    return lista;
}

let Texto = function(palavra){
    palavra = palavra.toUpperCase();

    let palavraInvertida = palavra.split('').reverse().join('');

    let resp;
    if(palavra === palavraInvertida)
        resp = `${palavra} é um palindromo`;
    else
        resp = `${palavra} Não é um palindromo`;

    return resp;
}

let Triangulo = function(x,y,z){
    let resp;

    if(n1 == n2 && n1 == n3)
        resp = "Equilátero";
    else if(n1 != n2 && n1 != n3)
        resp = "Escaleno";
    else
        resp = "Isósceles";

    return resp;
}

let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

let palavra = prompt("Digite uma palavra: ");

document.getElementById("resultado1").innerHTML = `Maior número: ${Maior(n1,n2,n3)}`;
document.getElementById("resultado2").innerHTML = `Ordem crescente: ${Ordem(n1,n2,n3)}`;
document.getElementById("resultado3").innerHTML = `${Texto(palavra)}`;
document.getElementById("resultado4").innerHTML = `Triangulo: ${Triangulo(n1,n2,n3)}`;

console.log(Texto(palavra));