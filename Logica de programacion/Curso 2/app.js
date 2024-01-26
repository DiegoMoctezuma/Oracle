//Variables
let numSecreto = 0;
let intentos = 0;   

//Funciones
function asignarTextoElemento (elemento, texto) {
    let elementoHTML =  document.querySelector(elemento); //Objeto
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(numeroUsuario === numSecreto){
        //Usuario adivino
        asignarTextoElemento("p", `Adivinaste el número secreto en ${intentos} ${intentos === 1 ? "intento!" : "intentos!"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //Usuario no adivino
        if(numeroUsuario > numSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput(){
    document.querySelector("#numeroUsuario").value = "";
    return;
}

function condicionesIniciales(){
    /*DOM (Document Object Model)*/ 
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numSecreto = numAleat();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true); //Colocar atributo con valor true
    return;
}

function numAleat() {
    return Math.floor(Math.random() * 10) + 1;
}

condicionesIniciales();