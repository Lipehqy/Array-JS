// Ex 1
let cores = ["azul" , "vermelho" , "preto"];
console.log(cores[1]);
console.table(cores);

// Ex 2
let numeros = [10, 20, 30, 40, 50];
console.log(numeros[0]);
console.log(numeros[numeros.length - 1]);
console.table(numeros);

// Ex 3
let frutas = ["Uva", "Kiwi"];
frutas.push("uva");
console.log(frutas);
console.table(frutas);

// Ex 4
let nomes = ["Giovanni", "Felipe", "Giovanna", "Luck"];
nomes.pop();
console.log(nomes);
console.table(nomes);

// Ex 5
let times = ["Flamengo", "Palmeiras", "São Paulo"];
console.log(times.length);
console.table(times);

// Ex 6
let animais = ["Cachorro", "Gato", "Coelho"];
console.log(animais);
console.table(animais);

// Exercício 7
let carros = ["Ford", "Tesla", "Toyota"];
carros[1] = "Ferrari";
console.log(carros);
console.table(carros);

// Exercício 8
let linguagens = ["Python", "Java", "JavaScript"];
console.log(linguagens("JavaScript"));
console.table(linguagens);

// Exercício 9
let valores = [5, 10, 20];
let soma = valores[0] + valores[1] + valores[2];
console.log(soma);
console.table(soma);

// Exercício 10
let tarefas = [];
tarefas.push("Estudar", "Treinar", "Ler");
console.log("1 - " + tarefas[0]);
console.log("2 - " + tarefas[1]);
console.log("3 - " + tarefas[2]);
console.table(tarefas);