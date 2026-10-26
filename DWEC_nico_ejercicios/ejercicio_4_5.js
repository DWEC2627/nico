// Ejercicio 4.5 - Arrays de peliculas

let peliculas = [
    { titulo: "Interstellar", director: "Christopher Nolan", genero: "Ciencia ficción", precio: 3.99, valoracion: 4.8 },
    { titulo: "Parasite", director: "Bong Joon-ho", genero: "Drama", precio: 3.49, valoracion: 4.9 },
    { titulo: "The Grand Budapest Hotel", director: "Wes Anderson", genero: "Comedia", precio: 2.49, valoracion: 4.6 },
    { titulo: "Whiplash", director: "Damien Chazelle", genero: "Drama", precio: 2.99, valoracion: 4.8 },
    { titulo: "Arrival", director: "Denis Villeneuve", genero: "Ciencia ficción", precio: 2.99, valoracion: 4.6 }
];

// Busco las dos peliculas por el titulo.
console.log("Buscar Parasite:");
console.log(peliculas.find(pelicula => pelicula.titulo === "Parasite"));

console.log("Buscar Whiplash:");
console.log(peliculas.find(pelicula => pelicula.titulo === "Whiplash"));

// Como no viene la disponibilidad, la pongo para hacer la prueba.
for (let i = 0; i < peliculas.length; i++) {
    peliculas[i].disponible = true;
}
peliculas[3].disponible = false; // Supongo que Whiplash esta alquilada.

console.log("Peliculas disponibles:");
let disponibles = peliculas.filter(pelicula => pelicula.disponible === true);
disponibles.forEach(pelicula => console.log(pelicula.titulo));

console.log("Peliculas de ciencia ficcion:");
let cienciaFiccion = peliculas.filter(pelicula => pelicula.genero === "Ciencia ficción");
cienciaFiccion.forEach(pelicula => console.log(pelicula.titulo));

console.log("Valoracion de menor a mayor:");
let porValoracion = peliculas.slice().sort((a, b) => a.valoracion - b.valoracion);
porValoracion.forEach(pelicula => console.log(pelicula.titulo + ": " + pelicula.valoracion));

console.log("Precio de mayor a menor:");
let porPrecio = peliculas.slice().sort((a, b) => b.precio - a.precio);
porPrecio.forEach(pelicula => console.log(pelicula.titulo + ": " + pelicula.precio + " euros"));
