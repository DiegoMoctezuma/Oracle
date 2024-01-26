//2.1
function holaMundo(){
    console.log("Hola Mundo!");
    return;
}
console.log("********2.1********");
holaMundo();

//2.2
function saludo(nombre){
    console.log(`Hola ${nombre}!`);
    return;
}
console.log("********2.2********");
saludo("Diego");

//2.3
function doble(numero){
    console.log(2 * numero);
    return;
}
console.log("********2.3********");
doble(5);

//2.4
function promedio(numero1,numero2,numero3){
    console.log((numero1 + numero2 + numero3)/3);
    return;
}
console.log("********2.4********");
promedio(2,4,6);

//2.5
function numeroMayor(numero1,numero2){
    if(numero1 < numero2){
        console.log(`El número mayor es ${numero2}`);
    } else {
        console.log(`El número mayor es ${numero1}`);
    }
    return;
}
console.log("********2.5********");
numeroMayor(5,10);

//2.6
function cuadrado(numero){
    console.log(numero * numero);
    return;
}
console.log("********2.6********");
cuadrado(5);