
/* Calculadora de alquiler */

// Guardamos los datos de las películas utilizando const,
// ya que sus valores no van a cambiar durante el programa.

/* Película 1 */
const titulo1 = "Interstellar";
const precioTxt1 = "3.99";
const edadMinimaTx1 = "16";
const disponible1 = true;
const formato1 = "4K";

/* Película 2 */
const titulo2 = "Irreversible";
const precioTxt2 = "2.99";
const edadMinimaTx2 = "18";
const disponible2 = true;
const formato2 = "HD";

/* Cliente 1 */
const nombre1 = "Pedro";
const diasSolicitados1 = "6";
const edad1 = 17;
const saldo1 = 5.01;

/* Cliente 2 */
const nombre2 = "Laura";
const diasSolicitados2 = "5";
const edad2 = 18;
const saldo2 = 15;


// Probamos recorriendo los clientes.

// Utilizamos un bucle for para recorrer los dos clientes.
// El contador c comienza en 1 y aumenta hasta llegar a 2.

for (let c = 1; c <= 2; c++) {

    // Declaramos las variables con let porque sus valores
    // cambiarán dependiendo del cliente que estemos recorriendo.

    let nombre;
    let diasSolicitados;
    let edad;
    let saldo;

    // Utilizamos if y else para asignar los datos
    // correspondientes a cada cliente.

    if (c === 1) {
        nombre = nombre1;
        diasSolicitados = diasSolicitados1;
        edad = edad1;
        saldo = saldo1;
    } else {
        nombre = nombre2;
        diasSolicitados = diasSolicitados2;
        edad = edad2;
        saldo = saldo2;
    }


    // Probamos recorriendo las películas.

    // Este segundo bucle for está dentro del primero.
    // De esta manera, cada cliente revisará las dos películas.

    for (let p = 1; p <= 2; p++) {

        // Declaramos las variables para guardar
        // los datos de la película correspondiente.

        let titulo;
        let precioTxt;
        let edadMinimaTxt;
        let disponible;
        let formato;

        // Comprobamos qué película estamos recorriendo.

        if (p === 1) {
            titulo = titulo1;
            precioTxt = precioTxt1;
            edadMinimaTxt = edadMinimaTx1;
            disponible = disponible1;
            formato = formato1;
        } else {
            titulo = titulo2;
            precioTxt = precioTxt2;
            edadMinimaTxt = edadMinimaTx2;
            disponible = disponible2;
            formato = formato2;
        }


        // Convertimos los textos a números.

        // Number() permite convertir
        // una cadena de texto a un valor numérico.

        let precio = Number(precioTxt);
        let dias = Number(diasSolicitados);
        let edadMinima = Number(edadMinimaTxt);


        // Mostramos la información inicial en consola.

        console.log("VIDEO CLUB AURORA");
        console.log("Película: " + titulo);


        // Comprobamos si la película está disponible.
        // El operador ! significa negación lógica (NOT).

        if (!disponible) {

            console.log("Alquiler no permitido a: " + nombre);
            console.log("Motivo: película no disponible");

        // Comprobamos si el cliente tiene la edad mínima.
        // Si su edad es inferior, no puede alquilarla.

        } else if (edad < edadMinima) {

            console.log("Alquiler no permitido a: " + nombre);
            console.log("Motivo: edad inferior a la permitida");

        } else {

            // Si la película está disponible y el cliente
            // cumple la edad mínima, calculamos el alquiler.

            let suplemento = 0;

            // Utilizamos switch para comprobar el formato.
            // Dependiendo del formato se aplica un suplemento.

            switch (formato) {

                case "HD":
                    suplemento = 0;
                    break;

                case "4K":
                    suplemento = 0.50;
                    break;
            }


            // Inicializamos el total del alquiler en cero.

            let total = 0;

            // Recorremos los días solicitados.
            // El contador dia aumenta de uno en uno.

            for (let dia = 1; dia <= dias; dia++) {

                // Inicialmente cada día tiene el precio normal.

                let precioDia = precio;

                // Utilizamos if, else if y else para
                // aplicar los descuentos según el día.

                if (dia <= 2) {

                    // Los primeros dos días tienen precio completo.

                    precioDia = precio;

                } else if (dia <= 4) {

                    // Los días 3 y 4 tienen un 20% de descuento.

                    precioDia = precio * 0.80;

                } else {

                    // A partir del día 5 se aplica un 40% de descuento.

                    precioDia = precio * 0.60;
                }

                // Sumamos el precio de cada día y el suplemento
                // correspondiente al formato de la película.

                total = total + precioDia + suplemento;
            }


            // Comprobamos si el saldo del cliente
            // es suficiente para pagar el alquiler.

            // El operador >= significa mayor o igual que.
            
            if (saldo >= total) {

                // Calculamos el dinero que le queda al cliente.

                let saldoRestante = saldo - total;

                // Mostramos los datos del alquiler confirmado.

                console.log("Días: " + dias);
                console.log("Formato: " + formato);
                console.log("Total: " + total.toFixed(2) + "€");
                console.log("Alquiler confirmado a: " + nombre);
                console.log("Saldo disponible: " + saldoRestante.toFixed(2) + "€");

            } else {

                // Si el cliente no tiene suficiente saldo,
                // mostramos el motivo del rechazo.

                console.log("Alquiler no permitido a: " + nombre);
                console.log("Motivo: saldo insuficiente");
                console.log("Importe requerido: " + total.toFixed(2) + "€");
                console.log("Saldo disponible: " + saldo.toFixed(2) + "€");
            }
        }

        // Separador para distinguir cada comprobación.

        console.log("===========");
        console.log("");
    }
}
