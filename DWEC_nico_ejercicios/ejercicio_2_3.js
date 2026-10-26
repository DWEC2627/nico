// Ejercicio 2.3 - Recorrido de identificadores

// El for empieza en 1 y termina en 10.
for (let i = 1; i <= 10; i++) {
    // Con padStart completo el numero con ceros a la izquierda.
    let numero = String(i).padStart(3, "0");
    console.log("AUR-" + numero);
}
