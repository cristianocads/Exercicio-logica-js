let nome = "Cristiano";
console.log(`Olá ${nome}, seja bem vindo!`);
let valor1 = 5;
let valor2 = 7;
alert(`Olá ${nome}, seja bem vindo!`);

let programacao ;
programacao = prompt("Qual a programação que vc mais gosta?");
console.log(programacao);

let resultadoSoma = valor1 + valor2 ;
let resultadoDiferenca = valor1 - valor2 ;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultadoSoma}.`);
console.log(`A diferença entre ${valor1} - ${valor2} é igual a ${resultadoDiferenca}.`);


let idade;
idade = prompt("Qual sua idade?");
if (idade >= 18) {
    console.log(`Você é maior de idade`);
} else {
    console.log("você é menor de idade");
}

let numero;
numero = prompt("Digite um número.");
let palavraNumero = numero > 0 ? "Positivo" : "Negativo";
console.log(`O número é ${palavraNumero}`);
if (numero > 0) {
    alert(`O número é positivo`);
} else {
    alert(`O número é negativo`);
}

let numeroInt = 1;
while (numeroInt <= 10) {
    console.log(numeroInt);
    numeroInt++
}

let nota = prompt("Qual foi sua nota?");
if (nota >= 7) {
    alert("Aprovado");
    console.log("Aprovado");
} else {
    alert("Reprovado");
    console.log("Reprovado");
}

let aleatorio = Math.random();
console.log(aleatorio);

let aleatorioDez = parseInt(Math.random() * 10) + 1;
console.log(aleatorioDez);

let aleatorioMil = parseInt(Math.random() * 1000) + 1;
console.log(aleatorioMil);
