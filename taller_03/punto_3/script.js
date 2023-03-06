let valInmueble = 230000000;
let gastEstructuracon = 8000000;
let interes = 1.5;

let valAhorrado = 50000000;
let ahorCesantias = 70000000;
let meses = 0;

let valorDeuda, valMes, valMesIntereses, cuotaInteres;
let totalPagado = 0;

valorDeuda = (valInmueble + gastEstructuracon) - (valAhorrado + ahorCesantias)
valMes = 5000000;
//segundo punto
do{
    meses +=1;
 if(valorDeuda<valMes){
        valMes = valorDeuda;
    }
    valMesIntereses = valorDeuda * 0.015;
    cuotaInteres = valMes + valMesIntereses;
    console.log("el valor a pagar del mes " + meses + " sera de " + cuotaInteres.toFixed(0));
    valorDeuda -= valMes;
    totalPagado += cuotaInteres;
}while(valorDeuda != 0);

console.log("al final del prestamo termina pagando " + totalPagado.toFixed(0));
console.log("pagando 5.000.000 terminara pangando todo en un total de "+ meses + " meses");



