const PresupuestoDiario = Number(prompt("Ingresa tu presupuesto diario"));
let Comida = Number(prompt("Ingresa tu estimado en comida diaria"));
let Libros = Number(prompt("Ingresa tu estimado en compra de libros"));
const PropositoAhorrado = Number(prompt("Ingresa cuanto quieres ahorrar"));

let count = 0

let P_Comer = confirm("Desea comer hoy");
if (P_Comer) {
    count += Comida
}

let P_Libros = confirm("Desea comprar libros hoy");
if (P_Libros) {
    count += Libros
}

if(PresupuestoDiario >= count){
    alert("Tienes posibilidad de comprar el/los productos");
}
else{
    alert("No tienes posibilidad de comprar el/los productos");
}

if(PresupuestoDiario-count <= 0){
    alert("No vas a ahorrar nada :(");
}
else{
    if(PropositoAhorrado<=(PresupuestoDiario-count)){
        alert("Has llegado EXITOSAMENTE a la meta de ahorro");
    }
    else{
        alert(`No has llegado EXITOSAMENTE a la meta de ahorro pero llevas ${PresupuestoDiario-count}`);
    }
}


