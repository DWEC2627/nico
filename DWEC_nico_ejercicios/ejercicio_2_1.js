// Ejercicio 2.1 - Datos de una pelicula

let titulo = "Interstellar";
let director = "Christopher Nolan";
let anio = 2014;
let precio = 3.99;
let disponible = true;
let valoracion = 4.8;

// Muestro todos los datos por consola.
console.log("Titulo: " + titulo);
console.log("Director: " + director);
console.log("Anio: " + anio);
console.log("Precio: " + precio);
console.log("Disponible: " + disponible);
console.log("Valoracion: " + valoracion);

// Calculo el precio de dos alquileres.
let dosAlquileres = precio * 2;
console.log("Dos alquileres cuestan: " + dosAlquileres + " euros");

// Se suman 0,50 euros por cada uno de los tres dias.
let tresDias = precio + 0.50 * 3;
console.log("Alquiler de tres dias: " + tresDias + " euros");

console.log("La pelicula " + titulo + " es de " + director +
    ", del anio " + anio + ". Cuesta " + precio +
    " euros, tiene un " + valoracion + " de valoracion y su disponibilidad es " + disponible + ".");
