/* Varibles */ 
let numeroSecreto = 6;
let numeroUsuario = prompt("Ingrese un número entre 1 y 10");
console.log(numeroUsuario);

if (numeroSecreto == numeroUsuario) {
    alert(`Adivinaste, el número secreto es: ${numeroSecreto}`);
}else {
    alert('Lo siento, no adivinaste el número');
}