// Ejercicio 4.6 - Estadisticas
// Son las mismas peliculas del ejercicio 4.5.

let peliculas = [
    { titulo: "Interstellar", director: "Christopher Nolan", genero: "Ciencia ficción", precio: 3.99, valoracion: 4.8 },
    { titulo: "Parasite", director: "Bong Joon-ho", genero: "Drama", precio: 3.49, valoracion: 4.9 },
    { titulo: "The Grand Budapest Hotel", director: "Wes Anderson", genero: "Comedia", precio: 2.49, valoracion: 4.6 },
    { titulo: "Whiplash", director: "Damien Chazelle", genero: "Drama", precio: 2.99, valoracion: 4.8 },
    { titulo: "Arrival", director: "Denis Villeneuve", genero: "Ciencia ficción", precio: 2.99, valoracion: 4.6 }
];

// Pongo la misma disponibilidad que use en el 4.5.
for (let i = 0; i < peliculas.length; i++) {
    peliculas[i].disponible = true;
}
peliculas[3].disponible = false;

// Cuantas hay disponibles.
let disponibles = peliculas.filter(pelicula => pelicula.disponible === true);
console.log("Peliculas disponibles: " + disponibles.length);

// Precio medio de las cinco peliculas.
let suma = peliculas.reduce((total, pelicula) => total + pelicula.precio, 0);
let media = suma / peliculas.length;
console.log("Precio medio: " + media.toFixed(2) + " euros");

// Busco la que tiene la valoracion mas alta.
let mejor = peliculas[0];
peliculas.forEach(pelicula => {
    if (pelicula.valoracion > mejor.valoracion) {
        mejor = pelicula;
    }
});
console.log("Mejor valorada: " + mejor.titulo + " (" + mejor.valoracion + ")");

// Set para no repetir los generos.
let generos = new Set(peliculas.map(pelicula => pelicula.genero));
console.log("Generos sin repetir:");
console.log(generos);

// Cuento las peliculas de cada genero y lo guardo en un Map.
let peliculasPorGenero = new Map();
console.log("Cantidad por genero:");
for (let genero of generos) {
    let cantidad = peliculas.filter(pelicula => pelicula.genero === genero).length;
    console.log(genero + ": " + cantidad);
    peliculasPorGenero.set(genero, cantidad);
}

console.log("Resultado del Map:");
console.log(peliculasPorGenero);
