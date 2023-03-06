let valInmueble = 230000000;
let gastEstructuracon = 8000000;
let interes = 1.5;

let valAhorrado = 50000000;
let ahorCesantias = 70000000;
let meses = 240;

let valorDeuda, valMes, valMesIntereses, cuotaInteres;
let nuevCuota;
let totalPagado = 0;

valorDeuda = (valInmueble + gastEstructuracon) - (valAhorrado + ahorCesantias)
valMes = valorDeuda / meses;
//primer punto
for (let i = 1; i <= meses; i++) {
    valMesIntereses = valorDeuda * 0.015;
    cuotaInteres = valMes + valMesIntereses;
    //console.log("el valor a pagar del mes " + i + " sera de " + cuotaInteres.toFixed(0));
    valorDeuda -= valMes;
    totalPagado += cuotaInteres;
}
console.log("al final del prestamo termina pagando " + totalPagado.toFixed(0));

//segundo
console.log("-------------------------------- ");


