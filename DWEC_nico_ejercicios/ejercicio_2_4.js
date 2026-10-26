// Ejercicio 2.4 - Tipos, conversiones y ambito

let precioTexto = "3.99";
let diasTexto = "4";

console.log("Tipo de precioTexto: " + typeof precioTexto);
console.log("Tipo de diasTexto: " + typeof diasTexto);

let vuelta = 1;

// El while se ejecuta dos veces.
while (vuelta <= 2) {
    let variableWhile = "Estoy dentro del while";
    console.log("Vuelta: " + vuelta);

    if (vuelta === 1) {
        // Aunque son textos, JavaScript los multiplica como numeros.
        console.log("Multiplicacion sin convertir: " + (precioTexto * diasTexto));
    } else {
        let precioNumero = Number(precioTexto);
        let diasNumero = Number(diasTexto);
        console.log("Tipo convertido: " + typeof precioNumero);
        console.log("Multiplicacion convertida: " + (precioNumero * diasNumero));
    }

    // La primera vuelta no entra en este if.
    if (vuelta === 2) {
        let variableIf = "Estoy dentro del if";
        console.log(variableIf);
    }

    // El switch toma una opcion diferente en cada vuelta.
    switch (vuelta) {
        case 1:
            console.log("Camino 1 del switch");
            console.log(variableWhile);
            // console.log(variableIf); // No se puede usar fuera del if.
            console.log("La variable del if no se puede consultar aqui");
            break;
        case 2:
            console.log("Camino 2 del switch");
            console.log(variableWhile);
            // console.log(variableIf); // No se puede usar fuera del if.
            console.log("La variable del if no se puede consultar aqui");
            break;
    }

    // console.log(variableIf); // Da error: solo existe dentro del if.
    vuelta++;
}

// console.log(variableWhile); // Da error: se declaro dentro del while.
// console.log(variableIf); // Da error: se declaro dentro del if.
