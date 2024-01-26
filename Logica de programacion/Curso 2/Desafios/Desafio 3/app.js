//3.1
function imc(peso, altura) {
    return peso / (altura * altura);
}
console.log("********3.1********");
let peso = 70;
let altura = 1.70;
let IMC = imc(peso, altura);
console.log(`El IMC es ${IMC} con un peso de ${peso}kg y una altura de ${altura}m`);

//3.2
function factorialNumero(numero){
    let i = 0;
    let factorial = 0;
    while(numero > 0){
        if(i === 0){
            factorial = numero;
        } else {
            factorial *= numero;
        }
        numero--;
        i++;
    }
    return factorial;
}
let numeroPrueba = 5;
let numerpFactorial = factorialNumero(numeroPrueba);
console.log("********3.2********");
console.log(`${numeroPrueba}! = ${numerpFactorial}`);

//3.3
function conversionDolaresPesos(dolares){
    return dolares * 17.2;
}
let dolares = 100;
let pesos = conversionDolaresPesos(dolares);
console.log("********3.3********");
console.log(`$${dolares} USD --> $${pesos} MX`);

//3.4
function areaRectangulo(altura,ancho){
    return altura * ancho;
}
function perimetroRectangulo(altura,ancho){
    return 2 * (altura + ancho);
}
let alturaSala = 10;
let anchoSala = 5;
let areaSala = areaRectangulo(alturaSala,anchoSala);
let perimetroSala = perimetroRectangulo(alturaSala,anchoSala);
console.log("********3.4********");
console.log(`El área de la sala es ${areaSala}m^2 y el perímetro es ${perimetroSala}m`);

//3.5
const Pi = 3.1416; 
function areaCirculo(radio){
    return Pi * radio * radio;
}
function perimetroCirculo(radio){
    return 2 * Pi * radio;
}
let radioSalas = 5;
let areaSalas = areaCirculo(radioSalas);
let perimetroSalas = perimetroCirculo(radioSalas);
console.log("********3.5********");
console.log(`El área de la sala es ${areaSalas}m^2 y el perímetro es ${perimetroSalas}m`);

//3.6
function tablaMultiplicar(numero){
    let i = 1;
    while(i <= 10) {
        console.log(`${numero} X ${i} = ${numero * i}`);
        i++;
    }
}
console.log("********3.6********");
tablaMultiplicar(numeroPrueba);