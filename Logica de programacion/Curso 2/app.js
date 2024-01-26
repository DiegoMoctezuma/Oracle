//Funciones
function asignarTextoElemento (elemento, texto) {
    let elementoHTML =  document.querySelector(elemento); //Objeto
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log(typeof numeroUsuario);
    return;
}

function numAleat() {
    return Math.floor(Math.random() * 10) + 1;
}

let numSecreto = numAleat();
console.log(numSecreto);

/*DOM (Document Object Model)*/ 
asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");