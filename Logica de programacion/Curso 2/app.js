//Variables
let numSecreto = 0;
let intentos = 0;   
let numeroMaximo = 10;
let vidas = 0;
let listaNumerosSecretos = [];
let numeroMaximoLista = false;

//Funciones
function asignarTextoElemento (elemento, texto) {
    let elementoHTML =  document.querySelector(elemento); //Objeto
    elementoHTML.innerHTML = texto;
    return;
}

//Lógica del juego
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    if(!numeroMaximoLista){
        if(numeroUsuario === numSecreto){
            //Usuario adivino
            asignarTextoElemento("#info", `Adivinaste el número secreto en ${intentos} ${intentos === 1 ? "intento!" : "intentos!"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            asignarTextoElemento("#vidas","");
        } else {
            //Usuario no adivino
            vidas--;
            if (vidas === 0) {
                asignarTextoElemento("p","No adivinaste el número secreto 😢");
                asignarTextoElemento("#vidas","Vuelve a intentarlo!");
                document.getElementById("reiniciar").removeAttribute("disabled");
                listaNumerosSecretos = [];
            }else {
                if(numeroUsuario > numSecreto){
                    asignarTextoElemento("#info", "El número secreto es menor");
                    asignarTextoElemento("#vidas",`Vidas restantes: ${vidas}`);
                } else {
                    asignarTextoElemento("#info", "El número secreto es mayor");
                    asignarTextoElemento("#vidas",`Vidas restantes: ${vidas}`);
                }
                intentos++;
                limpiarInput();
            }
        }
    }else{
        asignarTextoElemento("h1", "Felicitaciones! Has ganado!");
        asignarTextoElemento("#info","Se han generado todos los números posibles");
        document.getElementById("reiniciar").removeAttribute("disabled");
        asignarTextoElemento("#reiniciar","Reiniciar");
        document.getElementById("reiniciar").setAttribute("class","container__boton reinicio");
        listaNumerosSecretos = [];
        numeroMaximoLista = false;
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
    asignarTextoElemento("#reiniciar","Nuevo juego");
    asignarTextoElemento("#vidas","");
    document.getElementById("reiniciar").setAttribute("class","container__boton nuevo");
    numSecreto = numAleat();
    intentos = 1;
    vidas = 3;
    return;
}

//Reinicia el juego
function reiniciarJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true); //Colocar atributo con valor true
    return;
}

//Generación de número aleatorio
function numAleat() {
    let numGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Verificación de que no se hayan generado todos los números
    if (listaNumerosSecretos.length == numeroMaximo - 1) {
        numeroMaximoLista = true;
    }else {
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