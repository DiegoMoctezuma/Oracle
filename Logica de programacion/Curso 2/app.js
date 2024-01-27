//Variables
let numSecreto = 0;
let intentos = 0;   
let numeroMaximo = 10;
let listaNumerosSecretos = [];

//Funciones
function asignarTextoElemento (elemento, texto) {
    let elementoHTML =  document.querySelector(elemento); //Objeto
    elementoHTML.innerHTML = texto;
    return;
}

//Lógica del juego
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

//Limpieza del número anterior
function limpiarInput(){
    document.querySelector("#numeroUsuario").value = "";
    return;
}

//Opciones iniciales
function condicionesIniciales(){
    /*DOM (Document Object Model)*/ 
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numSecreto = numAleat();
    intentos = 1;
}

//Reinicia todo
function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true); //Colocar atributo con valor true
    return;
}

//Generación de número aleatorio
function numAleat() {
    let numGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numGenerado);
    console.log(listaNumerosSecretos);

    if (listaNumerosSecretos.length === numeroMaximo) {
        asignarTextoElemento("p","Adivinaste todos los números secretos!");
    } else {
        //Verificación del número secreto para que no haya repeticiones
        if (listaNumerosSecretos.includes(numGenerado)) {
            return numAleat();
        }else {
            listaNumerosSecretos.push(numGenerado);
            return numGenerado;
        }
    }
}


condicionesIniciales();