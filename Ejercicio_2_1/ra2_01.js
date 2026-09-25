// EJERCICIO 2.1
// Datos de una película


// 1. Crear las variables

let titulo = "Interstellar";
let director = "Christopher Nolan";
let anio = 2014;
let precio = 3.99;
let disponible = true;
let valoracion = 4.8;


// 2. Mostrar todos los valores

console.log(titulo);
console.log(director);
console.log(anio);
console.log(precio);
console.log(disponible);
console.log(valoracion);


// 3. Calcular el precio de dos alquileres

let precioDosAlquileres = precio * 2;

console.log("Precio de dos alquileres: " + precioDosAlquileres + " €");


// 4. Calcular el precio de un alquiler de tres días

let precioTresDias = precio + (0.50 * 3);

console.log("Precio de un alquiler de tres días: " + precioTresDias + " €");


// 5. Mostrar una frase con los datos de la película

console.log(
    "La película " + titulo +
    " está dirigida por " + director +
    ", fue estrenada en " + anio +
    ", cuesta " + precio +
    " €, tiene una valoración de " + valoracion +
    " y su disponibilidad es " + disponible + "."
);


