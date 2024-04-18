let presupuestoStr = prompt("¿Cuál es tu presupuesto?");
let presupuesto = parseFloat(presupuestoStr);

let souvenirs = [];

let continuarIngresando = true;
while (continuarIngresando) {
    let nombre = prompt("Ingrese el nombre del souvenir:");
    let costoStr = prompt("Ingrese el costo del souvenir:");
    let costo = parseFloat(costoStr);
    let disponibleStr = prompt("¿Está disponible el souvenir? (true/false)");
    let disponible = disponibleStr.toLowerCase() === 'true';

    if (isNaN(costo) || costo <= 0 || (disponibleStr.toLowerCase() !== 'true' && disponibleStr.toLowerCase() !== 'false')) {
        console.error('Error: Datos de entrada inválidos.');
        continue;
    }

    souvenirs.push({
        nombre: nombre,
        costo: costo,
        disponible: disponible
    });

    let respuesta = prompt("¿Desea ingresar otro souvenir? (si/no)");
    if (respuesta.toLowerCase() !== 'si') {
        continuarIngresando = false;
    }
}

console.log(`Presupuesto disponible: $${presupuesto}`);
console.log('Lista de souvenirs disponibles:');
souvenirs.forEach(souvenir => {
    console.log(`${souvenir.nombre} - Costo: $${souvenir.costo}`);
    if (souvenir.costo <= presupuesto && souvenir.disponible === true) {
        console.log("Puedes comprar este souvenir.");
    } else {
        console.log("No puedes comprar este souvenir. No alcanza tu presupuesto.");
    }
});
