/* Varibles */ 
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 3;

/* Bucle del juego */
do {
    numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 10"));
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    
    if (numeroSecreto == numeroUsuario) {
        alert(`Adivinaste, el número secreto es: ${numeroSecreto}`);
        alert(`Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    }else {
        if (numeroSecreto < numeroUsuario) {
            alert('El número secreto es menor');
        }else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if(intentos > maxIntentos){
            alert(`Lo siento, no adivinaste el número. El número secreto es: ${numeroSecreto}`);
            alert(`Número de intentos: ${intentos}`);
            break;
        }
        //alert('Lo siento, no adivinaste el número');
    }
} while (numeroSecreto != numeroUsuario);