// Ejercicio 4.1 - Funciones del videoclub

// Calculamos lo que cuesta alquilar una pelicula varios dias.
function calcularPrecio(precioDia, dias) {
    let total = precioDia * dias;

    if (dias >= 4 && dias <= 6) {
        total = total * 0.95;
    } else if (dias >= 7) {
        total = total * 0.90;
    }

    return total;
}

function esAlquilable(disponible) {
    return disponible === true;
}

function permiteAlquiler(edad, edadMinima = 16) {
    return edad >= edadMinima;
}

function tieneSaldo(saldo, precioTotal) {
    return saldo >= precioTotal;
}

function puedeAlquilar(disponible, edad, saldo, dias, precioDia) {
    let precioTotal = calcularPrecio(precioDia, dias);
    return esAlquilable(disponible) && permiteAlquiler(edad) && tieneSaldo(saldo, precioTotal);
}

// Pruebo las funciones con los datos de un cliente.
let disponible = true;
let edad = 17;
let saldo = 20;
let dias = 4;
let precioDia = 3.99;
let precioFinal = calcularPrecio(precioDia, dias);

console.log("Precio final: " + precioFinal.toFixed(2) + " euros");
console.log("Esta disponible: " + esAlquilable(disponible));
console.log("Tiene edad suficiente: " + permiteAlquiler(edad));
console.log("Tiene saldo: " + tieneSaldo(saldo, precioFinal));
console.log("Puede alquilar: " + puedeAlquilar(disponible, edad, saldo, dias, precioDia));
