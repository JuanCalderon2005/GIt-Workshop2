let clima = prompt("Ingrese el pronóstico del clima (lluvia/soleado):");
let pesoMaleta = parseInt(prompt("Ingrese el peso de su equipaje en kilogramos:"));
let pesoTotal = parseFloat(prompt("Ingrese el peso total permitido en kilogramos:"));

console.log("Condiciones actuales:");
console.log("Clima:", clima);
console.log("Peso de la maleta:", pesoMaleta);
console.log("Peso total permitido:", pesoTotal);

if (clima === "lluvia") {
    console.log("Pronóstico de lluvia: Empaca un paraguas.");
} else if (clima === "soleado") {
    console.log("Pronóstico soleado: No necesitas un paraguas.");
} else {
    console.log("No se proporcionó un pronóstico válido.");
}

if (pesoMaleta >= 2) {
    console.log("Tienes suficiente espacio: Puedes llevar una cámara.");
} else {
    console.log("No tienes suficiente espacio para una cámara.");
}

if (pesoTotal >= 1) {
    console.log("Peso permitido: Puedes llevar algunos souvenirs.");
} else {
    console.log("No puedes llevar souvenirs debido al límite de peso.");
}

let articuloExtra = prompt("¿Desea agregar un artículo extra a la maleta? (Sí/No)").toLowerCase();

if (articuloExtra === "sí" || articuloExtra === "si") {
    let nombreArticulo = prompt("Ingrese el nombre del artículo:");
    let pesoArticulo = parseFloat(prompt("Ingrese el peso del artículo en kilogramos:"));
    
    if (pesoArticulo > pesoTotal || pesoArticulo > espacioDisponible) {
        console.log("El artículo es demasiado pesado o grande para agregar a la maleta.");
    } else {
        console.log("Se ha agregado el artículo", nombreArticulo, "a la maleta.");
        pesoMaleta -= pesoArticulo;
        pesoTotal -= pesoArticulo;
    }
} else {
    console.log("No se agregó ningún artículo extra a la maleta.");
}
