/* Varibles */ 
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;

/* Bucle del juego */
do {
    numeroUsuario = prompt("Ingrese un número entre 1 y 10");
    console.log(numeroUsuario);
    
    if (numeroSecreto == numeroUsuario) {
        alert(`Adivinaste, el número secreto es: ${numeroSecreto}`);
        alert(`Número de intentos: ${intentos}`);
    }else {
        if (numeroSecreto < numeroUsuario) {
            alert('El número secreto es menor');
        }else {
            alert('El número secreto es mayor');
        }
        intentos++;
        //alert('Lo siento, no adivinaste el número');
    }
} while (numeroSecreto != numeroUsuario);