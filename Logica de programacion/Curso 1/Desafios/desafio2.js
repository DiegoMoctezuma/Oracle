//2.1
let diaSemana = prompt("Digite que dia es hoy: ");
if(diaSemana == "Sabado" || diaSemana == "Domingo"){
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

//2.2
let numeroUsuario = prompt("Ingrese un numero: ");

if(numeroUsuario >= 0) {
    alert("El numero es positivo");
} else {
    alert("El numero es negativo");
}

//2.3
let puntuacion = 100;

if (puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar");
}

//2.4
let saldoCuenta = 1000; 

alert(`El saldo de tu cuenta es de $${saldoCuenta}`);

//2.5
let nombreUsuario = prompt("Ingrese su nombre: ");

alert(`Bienvenido ${nombreUsuario}`);