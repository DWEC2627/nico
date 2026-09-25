// EJERCICIO 2.3
// Recorrido de identificadores
// Lo mas simple es que el 'for' cuente del 1 al 100 (en este caso 300),
// padStard pone los ceros y console.log muestra el codigo en terminal


for (let i = 1; i <= 300; i++) {


    let numero = String(i).padStart(3, "0");


    console.log("AUR-" + numero);
}

/*
for
↓
repite del 1 al 10 (he probado con 300)

String(i)
↓
convierte el número en texto

padStart(3, "0")
↓
añade ceros a la izquierda

"AUR-" + numero
↓
genera AUR-001, AUR-002...
*/