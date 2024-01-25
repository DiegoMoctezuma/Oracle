let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafio";

//Funciones
function consola() {
    console.log("El botón fue clicado");
}

function bPrompt() {
    let ciudad = prompt("Escribe una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function bAlert() {
    alert("Yo amo JS");
}

function suma(){
    let num1 = parseInt(prompt("Ingresa un número"));
    let num2 = parseInt(prompt("Ingresa otro número"));
    let resultado = num1 + num2;
    alert(`${num1} + ${num2} = ${resultado}`);
}