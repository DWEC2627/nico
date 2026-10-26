// Ejercicio 4.2 - Las mismas funciones con flechas

const calcularPrecio = (precioDia, dias) => {
    let total = precioDia * dias;
    if (dias >= 4 && dias <= 6) total = total * 0.95;
    else if (dias >= 7) total = total * 0.90;
    return total;
};

const esAlquilable = disponible => disponible === true;
const permiteAlquiler = (edad, edadMinima = 16) => edad >= edadMinima;
const tieneSaldo = (saldo, precioTotal) => saldo >= precioTotal;
const puedeAlquilar = (disponible, edad, saldo, dias, precioDia) =>
    esAlquilable(disponible) && permiteAlquiler(edad) &&
    tieneSaldo(saldo, calcularPrecio(precioDia, dias));

let contador = 3;

// Cada segundo se muestra un numero de la cuenta atras.
let intervalo = setInterval(() => {
    console.log(contador);
    contador--;

    if (contador === 0) {
        clearInterval(intervalo);
        if (puedeAlquilar(true, 17, 20, 4, 3.99)) {
            console.log("Se puede alquilar");
        } else {
            console.log("No se puede alquilar");
        }
    }
}, 1000);
