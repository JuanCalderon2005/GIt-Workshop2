const PresupuestoInicial = Number(prompt("Ingresa tu presupuesto inicial"));
let Alojamiento = Number(prompt("Ingresa porfa el costo estimado del alojamiento"));
let Transporte = Number(prompt("Ingresa porfa el costo estimado del transporte"));
let Comida = Number(prompt("Ingresa porfa el costo estimado de la comida"));
const Umbral = Number(prompt("Cuanto quieres dejar para EMERGENCIAS?"));

const DineroDespuesDeGastos = PresupuestoInicial - (Alojamiento+Transporte+Comida);

let ArticulosExtras = [];

if (DineroDespuesDeGastos >= Umbral){
    
    let continuarIngresando = true;

    while (continuarIngresando){

        let respuesta = prompt("¿Desea ingresar otro articulo? (si/no)");
        if (respuesta.toLowerCase() !== 'si') break;
        
        let NombreArticuloExtra = prompt("Ingresa el nombre del articulo a agregar");
        let CostoArticuloExtra = Number(prompt("Ingresa el costo del articulo a agregar"));
        
        let ArticuloExtra = {
            Nombre: NombreArticuloExtra,
            Costo: CostoArticuloExtra
        }

        ArticulosExtras.push(ArticuloExtra);
    }
}
else{
    alert("Tu presupuesto es inferior al umbral de EMERGENCIAS");
}

let minCostoArticulo = ArticulosExtras.sort((a ,b) => a.Costo - b.Costo);
let min = minCostoArticulo[0];



alert(`El artilo: ${min.Nombre} es el articulo mas economico con un valor de ${min.Costo}`)


