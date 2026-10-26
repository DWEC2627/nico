/*Calculadora de alquiler*/

// Guardar variables

/*Pelicula 1*/
const titulo1= "Interstellar";
const precioTxt1 = "3.99";
const edadMinimaTx1 = "16";
const disponible1= true;
const formato1= "4K";


/*Pelicula 2*/
const titulo2= "irreversible";
const precioTxt2 = "2.99";
const edadMinimaTx2 = "18";
const disponible2= true;
const formato2= "HD";


/*Cliente 1*/
const nombre1 = "Pedro";
const diasSolicitados1 = "6";
const edad1 = 17;
const saldo1 = 5.01;

/*Cliente 2*/
const nombre2 = "Laura";
const diasSolicitados2 = "5";
const edad2 = 18;
const saldo2 = 15;


// probamos recorriendo clientes

for (let c = 1; c<=2; c++) {

    let nombre;
    let diasSolicitados;
    let edad;
    let saldo;

    if (c === 1) {
        nombre=nombre1;
        diasSolicitados= diasSolicitados1;
        edad = edad1;
        saldo = saldo1;
    } else {
        nombre=nombre2;
        diasSolicitados= diasSolicitados2;
        edad=edad2;
        saldo= saldo2;
    }

// probamos recorriendo peliculas


for (let p = 1; p <=2; p++) {

        let titulo;
        let precio;
        let edadMinimaTxt;
        let disponible;
        let formato;

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

        // convertir textos a numeros

        let precioTxt = Number(precioTxt);
        let diasSolicitados = Number(diasSolicitados);
        let edadMinima = Number(edadMinimaTxt);

        console.log ("VIDEO CLUB AURORA");
        console.log ("pelicula:" + titulo);

        if (!disponible){
            console.log ("Alquiler no permitido a: " + nombre);
            console.log ("Motivo: pelicula no disponible");
        } else if (edad > edadMinima) {

            console.log ("Alquiler no permitido a:" + nombre);
            console.log ("Motivo: pelicula no disponible");

        } else {

        let suplemento = 0;

        switch (formato) {
            case "HD":
                suplemento = 0;
                break;

            case "4K":
                suplemento = 0,50;
                break;
        }

        let total = 0;

        for (let dia = 1; dia <= dias; dia++) {

            let precioDia = precio;
    
        if (dia <=2) {
            precioDia = precio;
        } else if (dia <=4) {
            precioDia = precio * 0.80;
        } else {
            precioDia = precio * 0.60;
        }
        
        totaL = total + precioDia + suplemento;
        }

        if (saldo>= total) {
            let saldoRestante = saldo - total;
            
            console.log ("Dias:" + dias);
            console.log ("Formato:" + formato);
            console.log ("Total:" total.toFixed(2) + "€");
            console.log ("Alquiler Confirmado a " + nombre);
            console.log ("Saldo disponible:" + saldoRestante.toFixed(2)+"€");

        } else {
            
            console.log ("Alquiler no permitido a:" + nombre);
            console.log ("Motivo: Saldo insuficiente: requerido" + total.toFixed(2) + "€ disponible" + saldo.toFixed(2)+ "€");
    
        }
    }

    console.log ("===========");
    console.log ("");
    }
}