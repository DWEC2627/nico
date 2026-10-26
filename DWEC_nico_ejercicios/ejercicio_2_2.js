// Ejercicio 2.2 - Reglas de alquiler

let edad = 17;
let disponible = true;
let saldo = 5.00;
let precio = 3.49;

// Se tienen que cumplir las tres condiciones.
if (disponible && edad >= 16 && saldo >= precio) {
    console.log("Alquiler permitido");
} else {
    if (!disponible) {
        console.log("La pelicula no esta disponible");
    }
    if (edad < 16) {
        console.log("No tienes la edad minima para alquilar");
    }
    if (saldo < precio) {
        console.log("No tienes saldo suficiente");
    }
}
