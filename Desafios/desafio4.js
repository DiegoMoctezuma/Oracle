//4.1
console.log("********D1********");
console.log("Bienvenid@!");

//4.2
let nombre = "Diego";
console.log("********D2********");
console.log(`¡Hola ${nombre}!`);

//4.3
let nombre2 = "Rafael"
alert(`¡Hola ${nombre2}!`);

//4.4
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("********D4********");
console.log(lenguajeFavorito);

//4.5
let valor1 = 2;
let valor2 = 5;
let resultado = valor1 + valor2;
console.log("********D5********");
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//4.6
let valor_1 = 2;
let valor_2 = 5;
let resultado2 = valor_1 - valor_2;
console.log("********D6********");
console.log(`La resta de ${valor_1} y ${valor_2} es igual a ${resultado2}`);

//4.7
let edad = prompt("¿Cuál es tu edad?");
console.log("********D7********");
if(edad >= 18){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//4.8
let numero = prompt("Ingrese un número");
console.log("********D8********");
if(numero == 0){
    console.log("El número es 0");
}else if (numero > 0){
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

//4.9
let i = 1;
console.log("********D9********");
while(i <= 10){
    console.log(i);
    i++;
}

//4.10
let nota = 4;
let minNota = 7;
console.log("********D10********");
if(nota >= minNota){
    console.log("Aprobado");
}else {
    console.log("Reprobado");
}

//4.11
let numAleat = Math.floor(Math.random() * 6) + 1;
console.log("********D11********");
console.log(`Número aleatorio: ${numAleat}`);

//4.12
let numAleat2 = Math.floor(Math.random() * 10) + 1;
console.log("********D12********");
console.log(`Número aleatorio entre 1 y 10: ${numAleat2}`);

//4.13
let numAleat3 = Math.floor(Math.random() * 1000) + 1;
console.log("********D13********");
console.log(`Número aleatorio entre 1 y 1000: ${numAleat3}`);