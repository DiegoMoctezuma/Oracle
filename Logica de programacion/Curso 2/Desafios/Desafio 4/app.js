//4.1 4.2
let listaGenerica = [];
let lenguajesDeProgamacion = ["JavaScript", "C", "C++", "Kotlin" , "Python"];

//4.3
lenguajesDeProgamacion.push("Java");
lenguajesDeProgamacion.push("Ruby");
lenguajesDeProgamacion.push("GoLang");

//4.4
function mostrarLista(lista) {
    lista.forEach(i => {
        console.log(i);
    });
    return;
}
console.log("********Lista********");
mostrarLista(lenguajesDeProgamacion);

//4.5
function mostrarListaInversa(lista){
    let i = lista.length - 1;
    while(i >= 0){
        console.log(lista[i]);
        i--;
    }
    return;
}
console.log("********Lista inversa********");
mostrarListaInversa(lenguajesDeProgamacion);

//4.6
function promedioLista(lista){
    let suma = 0;
    let i = 0;
    let elementosLista = lista.length;
    while(i < elementosLista){
        suma += lista[i];
        i++; 
    }
    return suma / elementosLista;
}
let listaNumeros = [70,-64,66,21];
console.log("********Promedio de lista********");
console.log(promedioLista(listaNumeros));

//4.7
function numeroMenorMayor(lista){
    let menor = lista[0];
    lista.forEach(i => {
        if(i < menor) menor = i;
    });

    let mayor = menor;
    lista.forEach(i => {
        if(i > mayor) mayor = i;
    }); 

    console.log(`El número mayor es: ${mayor}`);
    console.log(`El número menor es: ${menor}`);
}
console.log("********Mayor menor********");
numeroMenorMayor(listaNumeros);

//4.8
function sumaLista(lista){
    let suma = 0;
    lista.forEach(i => suma += i);
    return suma;
}
console.log("********Suma lista********");
console.log(sumaLista(listaNumeros));

//4.9
function elementoLista(lista,elemento){
    if(lista.includes(elemento)){
        return lista.indexOf(elemento);
    } else{
        return -1;
    }
}
console.log("********Suma lista********");
console.log(elementoLista(listaNumeros,21));

//4.10
function sumaListas(lista1,lista2){
    let suma = 0;
    for(let i = 0; i < lista1.length; i++ ){
        suma = suma + lista1[i] + lista2[i];
    } 
    return suma;
}
let num1 = [1,2,3,4,5];
let num2 = [1,2,3,4,5];
console.log("********Suma listas********");
console.log(sumaListas(num1,num2));

//4.11
function cuadradoLista(lista){
    let listaCuadrado = [];
    lista.forEach(i => {
        listaCuadrado.push(i*i);
    });
    return listaCuadrado;
}
console.log("********Cuadrado lista********");
console.log(num1);
console.log(cuadradoLista(num1));