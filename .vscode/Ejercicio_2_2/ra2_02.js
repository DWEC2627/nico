// EJERCICIO 2.2
// Alquiler de una película


// 1. Crear las variables

let nombre = "Interstellar";
let genero = "Ciencia ficción";
let anio = 2014;
let precio = 3.99;
let disponible = true;
let valoracion = 4.8;


// 2. Precio de 2 alquileres

let precioDosAlquileres = precio * 2;

console.log("Precio de 2 alquileres: " + precioDosAlquileres + " €");


// 3. Precio de un alquiler durante 3 días
// Solo se cobra 0,50 € por cada día adicional a partir del segundo día

let precioTresDias = precio + 0.50;

console.log("Precio de 3 días: " + precioTresDias + " €");


// 4. Precio de un alquiler durante 5 días

let precioCincoDias = precio + (0.50 * 3);

console.log("Precio de 5 días: " + precioCincoDias + " €");


// 5. Mostrar un resumen

console.log(
    "Película: " + nombre +
    " | Género: " + genero +
    " | Año: " + anio +
    " | Precio: " + precio + " €" +
    " | Disponible: " + disponible +
    " | Valoración: " + valoracion
);