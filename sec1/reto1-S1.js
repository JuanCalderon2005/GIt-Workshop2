const cdactividades = 100000
const cdalimentos = 50000

const Nviaje = prompt("Ingresa tu destino")
let dias = prompt("Ingresa el numero de dias de tu viaje")
let presup = prompt("Ingresa tu presupuesto estimado patra el viaje")



const i = 0

do{
    let presupdiario = presup/dias

    if(presupdiario >= (cdactividades+cdalimentos)){
        alert("Tu presupuesto es optimo para tu dia a dia")
        const i = 1
        break;
    }
    else{
        alert("Tu presupuesto no es optimo para viajar")
        dias = prompt("Vuelve a ingresar el numero de dias deceado")
        presup = prompt("Vuelve a ingresar tu presupuesto estimado patra el viaje")
    }
}while(i == 0)