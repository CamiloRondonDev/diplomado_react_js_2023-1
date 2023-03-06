//cuadrado 
let lado1 = 5;
let lado2 = 12;

//circulo
let radio1 = 5; 
let radio2 = 10;

//rectangulo
let base1 = 5;
let altura1 = 7;

let base2 = 10;
let altura2 = 6;

//triangulo 
let lado1t = 5;
let altura1T = 7;

let lado2t = 10;
let altura2T = 7;

let perimetro , area;
const PI = 3.14;

//cuadrados  
perimetro = 4 * lado1;
console.log("el perimetro del cuadrado 1 es de: "+perimetro);
area = lado1 * lado1;
console.log("el area del cuadrado 1 es: " + area);

perimetros = 4 * lado2;
console.log("el perimetro del cuadrado 2 es de: "+perimetro);
area = lado2 * lado2;
console.log("el area del cuadrado 2 es: " + area);

//circulos
perimetro = (radio1 * 2) * PI;
console.log("el perimetro del primer circulo es :" + perimetro.toFixed(2));
area = PI * Math.pow(radio1, 2);
console.log("el area del primer circulo es: " + area);

perimetro = (radio2 * 2) * PI;
console.log("el perimetro del segundo circulo es :" + perimetro.toFixed(2));
area = PI * Math.pow(radio2,2);
console.log("el area del primer circulo es: " + area);

//rectangunlos
perimetro =  (2 * base1)  + (2 * altura1);
console.log("el perimetro del primero rectangulo es: " +perimetro);
area = base1 * altura1;
console.log("el area del primer rectangulo es: " + area);

perimetro = (2* base2) + (2 * altura2);
console.log("el perimetro del segundo rectangulo es: " +perimetro);
area = base2 * altura2;
console.log("el area del segundo rectangulo es: " + area);

//triangulo 
perimetro = lado1t * 3;
console.log("el perimetro del primer triangulo es: " + perimetro);

area = (lado1t * altura1T) / 2;
console.log("el area del primer triangulo es: " + area);

perimetro = lado2t * 3,
console.log("el perimetro del segundo triangulo es: " + perimetro);
area = (lado2t * altura2T) / 2;
console.log("el area del segundo triangulo es: " + area);

console.log("------------------------------");
//inicio lista
const ingredientes = ["limon","aguacate","cebolla","vinagre"];

for(var i=0 ; i<ingredientes.length;i++){
  console.log(ingredientes[i]);
}

console.log("------------------------------");
//add tomate y aji
ingredientes.push("tomate","aji");
for(var i=0 ; i<ingredientes.length;i++){
    console.log(ingredientes[i]);
  }
  
console.log("------------------------------");
//ordenarla
ingredientes.sort();
 for(var i=0 ; i<ingredientes.length;i++){
    console.log(ingredientes[i]);
  }


console.log("------------------------------");
//eliminar limon
let aux = ingredientes.indexOf("limon");
ingredientes.splice(aux,1)
for(var i=0 ; i<ingredientes.length;i++){
    console.log(ingredientes[i]);
 }

 console.log("------------------------------");
//cambiar cebolla por cebollita
aux = ingredientes.indexOf("cebolla");
ingredientes.splice(aux,1,"cebollita");
for(var i=0 ; i<ingredientes.length;i++){
    console.log(ingredientes[i]);
 }
 console.log("------------------------------");
 console.log("el tamaño del array ingredientes habiendo eliminado limon es de " + ingredientes.length);