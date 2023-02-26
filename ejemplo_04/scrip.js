var harina = 2500;
var huevos = 500;
var levadura = 1200;
var chocolate = 7000;
var vainilla = 3000;
var totalPastel1 ,totalPastel2, totalPastel3;

//total pastel 1
totalPastel1 = (huevos*12) + levadura + vainilla + harina;
console.log("el precio total del pastel 1 es de " + totalPastel1);
//total pastel 2
totalPastel2 = (huevos*6) + levadura + chocolate;
console.log("el precio total del pastel 2 es de :" + totalPastel2);
//total pastel 3 "inventado"
totalPastel3 = (huevos*15) + levadura + chocolate;
console.log("el precio total del pastel 3 es de :" + totalPastel3);

//validacion 
if(totalPastel1 < totalPastel2){
    console.log("el pastel 1 es el mas economico con un valor de "+totalPastel1);
}else{
    console.log("el pastel 2 es el mas economico con un valor de "+totalPastel2);
}