// Ejercicio 4.4 - El alquiler de 48 horas
// Prueba realizada con la zona horaria de Madrid.

// Marzo es el mes 2 porque JavaScript empieza los meses en 0.
let inicio = new Date(2025, 2, 29, 20, 30);

console.log("Fecha de inicio en Madrid: " + inicio.toLocaleString("es-ES", { timeZone: "Europe/Madrid" }));
console.log("Fecha de inicio en UTC: " + inicio.toUTCString());
console.log("Diferencia inicial Madrid - UTC: " + (-inicio.getTimezoneOffset()) + " minutos");

// Primero sumo dos dias al calendario.
let dosDiasDespues = new Date(inicio);
dosDiasDespues.setDate(dosDiasDespues.getDate() + 2);

console.log("Dos dias despues en Madrid: " + dosDiasDespues.toLocaleString("es-ES", { timeZone: "Europe/Madrid" }));
console.log("Dos dias despues en UTC: " + dosDiasDespues.toUTCString());
console.log("Diferencia final Madrid - UTC: " + (-dosDiasDespues.getTimezoneOffset()) + " minutos");

// Con getTime calculo las horas de verdad entre las dos fechas.
let horasPasadas = (dosDiasDespues.getTime() - inicio.getTime()) / (1000 * 60 * 60);
console.log("Horas reales entre las dos fechas: " + horasPasadas);

// Ahora sumo exactamente 48 horas en milisegundos.
let finalReal = new Date(inicio.getTime() + 48 * 60 * 60 * 1000);
console.log("48 horas despues en UTC: " + finalReal.toUTCString());
console.log("48 horas despues en Madrid: " + finalReal.toLocaleString("es-ES", { timeZone: "Europe/Madrid" }));

// Laura intento verla a las 19:55 del 31 de marzo.
let cuandoEntraLaura = new Date(2025, 2, 31, 19, 55);
let minutosRestantes = (finalReal.getTime() - cuandoEntraLaura.getTime()) / (1000 * 60);
console.log("A Laura le quedaban " + minutosRestantes + " minutos de alquiler real");

// El cambio al horario de verano hizo que dos dias de calendario fueran 47 horas.
console.log("El videoclub corto el acceso una hora antes de cumplir las 48 horas.");
