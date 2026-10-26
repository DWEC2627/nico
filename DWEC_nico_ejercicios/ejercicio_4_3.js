// Ejercicio 4.3 - Gestion del videoclub con objetos

// Apartado 1: creo una pelicula con sus datos y su ficha.
let pelicula = {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anio: 2014,
    genero: "Ciencia ficcion",
    duracion: 169,
    disponible: true,
    ficha: function () {
        let estado = this.disponible ? "Disponible" : "No disponible";
        return this.titulo + " (" + this.anio + ") - " + this.director +
            " - " + this.duracion + " min - " + estado;
    }
};

console.log("1. Ficha de la pelicula:");
console.log(pelicula.ficha());

// Apartado 2: la alquilo, anado un metodo y borro el genero.
pelicula.disponible = false;
pelicula.estaDisponible = function () {
    return this.disponible;
};
delete pelicula.genero;

console.log("2. Disponible: " + pelicula.estaDisponible());
console.log("Genero despues de borrarlo: " + pelicula.genero);
console.log(pelicula.ficha());

// Apartado 3: creo el cliente y compruebo su limite.
let cliente = {
    nombre: "Laura",
    numero: 27,
    alquiladas: 2,
    maximo: 3,
    puedeAlquilar: function () {
        return this.alquiladas < this.maximo;
    }
};

console.log("3. Laura puede alquilar: " + cliente.puedeAlquilar());

// Apartado 4: solo alquilo si se cumplen las dos condiciones.
function alquilar(cliente, pelicula) {
    if (cliente.puedeAlquilar() && pelicula.disponible) {
        cliente.alquiladas++;
        pelicula.disponible = false;
        return cliente.nombre + " ha alquilado " + pelicula.titulo;
    } else {
        return "No se puede alquilar " + pelicula.titulo;
    }
}

// El primer intento falla porque Interstellar ya estaba alquilada.
console.log("4. Primer intento: " + alquilar(cliente, pelicula));

// La vuelvo a poner disponible para comprobar un alquiler correcto.
pelicula.disponible = true;
console.log("Segundo intento: " + alquilar(cliente, pelicula));
console.log("Alquileres de Laura: " + cliente.alquiladas);
console.log("Interstellar disponible: " + pelicula.disponible);

// Apartado 5: constructor para crear mas peliculas.
function Pelicula(titulo, director, anio, duracion) {
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.duracion = duracion;
    this.disponible = true;
    this.ficha = function () {
        let estado = this.disponible ? "Disponible" : "No disponible";
        return this.titulo + " (" + this.anio + ") - " + this.director +
            " - " + this.duracion + " min - " + estado;
    };
}

let matrix = new Pelicula("The Matrix", "Lana y Lilly Wachowski", 1999, 136);
let pulpFiction = new Pelicula("Pulp Fiction", "Quentin Tarantino", 1994, 154);

console.log("5. Peliculas creadas:");
console.log(matrix.ficha());
console.log(pulpFiction.ficha());

// Apartado 6: recorro las propiedades y muestro los valores.
function propiedades(objeto) {
    for (let nombre in objeto) {
        console.log(nombre + ": " + objeto[nombre]);
    }
}

function valores(objeto) {
    console.log(Object.values(objeto));
}

function aTexto(objeto) {
    console.log(JSON.stringify(objeto));
}

console.log("6. Propiedades de Matrix:");
propiedades(matrix);
console.log("Valores de Matrix:");
valores(matrix);
console.log("Matrix en texto:");
aTexto(matrix);
