//if - else - Condicionais
//As estruturas condicionais permitem executar difeentes blocos dependendo de uma condição

//let idade = 18;
//if (idade >= 18){
    //console.log("Voce é maior de idade!")
//} else {
    //console.log ("Voce é menor de idade");
//}

//Exemplo 02
//let nota = 7;

//if (nota >= 5) {
    //console.log("Aprovado!")
//} else {
    //console.log("Reprovado!")
//}


//Exemplo 03
//let senha = "1234"

//if (senha === "1234") {
    //console.log("Acesso permitido")
//} else {
    //console.log("Senha incorreta")
//}


//exercicio 1
let numero = -4;

if (numero >= 0){
    console.log("Positivo")
}else {
    console.log("Negativo")
}


//exercicio 2
let idade = "19";

if (idade >= 18){
    console.log("Voce é maior de idade")
} else {
    console.log ("Voce é menor de idade")
}


//exercicio 3
let numero2 = 8;

if (numero2 % 2 === 0){
    console.log("Par")
} else{
    console.log("Impar")
}


//exercicio 4
let  nota = "8";

if (nota >= 6){
    console.log("Aprovado!")
} else {
    console.log ("Reprovado!")
}


//exercicio 5 
let votar = 18;

if (votar >= 16){
    console.log("Pode votar!")
} else {
    console.log("Nao pode votar!")
}


//exercicio 6
let senha = "1122"

if (senha === "1234"){
    console.log("Acesso Permitido!")
}else{
    console.log("Acesso Negado!")
}


//exercicio 7
let temperatura = 33;

if (temperatura >= 25){
    console.log("Esta quante!")
} else {
    console.log ("Esta frio!")
}


//exercicio 8
let altura = 1.50;

if (altura >= 1.40){
    console.log("Pode entrar!")
}else{
    console.log("Nao pode entrar!")
}


//exercicio 9
let numero3 = 0;

if (numero3 > 0) {
    console.log("Positivo")
} else if (numero3 < 0) {
    console.log("Negativo")
} else {
    console.log ("Zero");
}

// exercicio 10
let notaClass = 7;

if (notaClass >= 9) {
console.log("Excelente");
} else if (notaClass >= 7) {
console.log("Bom");
} else if (notaClass === 6) {
console.log("Regular");
} else {
console.log("Reprovado");
}

// exercicio 11
let idadeDirigir = 18;
let temCNH = true;

if (idadeDirigir >= 18 && temCNH === true) {
console.log("Pode dirigir");
} else {
console.log("Não pode dirigir");
}

// exercicio 12
let Compra = 150;

if (Compra > 100) {
console.log("Ganhou desconto");
} else {
console.log("Sem desconto");
}

// exercicio 13
let usuario = "admin";
let senhaLogin = "123";

if (usuario === "admin" && senhaLogin === "123") {
console.log("Login realizado");
} else {
console.log("Erro de login");
}

// exercicio 14
let idadeFilme = 17;

if (idadeFilme >= 16) {
console.log("Pode assistir");
} else {
console.log("Não pode assistir");
}

// exercicio 15
let cor = "verde";

if (cor === "verde") {
console.log("Pode passar");
} else if (cor === "amarelo") {
console.log("Atenção");
} else if (cor === "vermelho") {
console.log("Pare");
}