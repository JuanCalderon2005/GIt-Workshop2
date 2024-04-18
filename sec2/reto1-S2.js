let trabajo = confirm("Tienes mucho trabajo?");
let energia = confirm("Estas bien de energia?");
let clima = confirm("El clima esta bien?");

if (trabajo === true && energia === true && clima === true) {
    alert("Sal a trabajar Vago!!");
}else if (energia == !true){
    alert("Deverias tomarte el dia libre!!");
}else if (trabajo === !true && energia === true && clima === true){
    alert("Deberias salir  correr!!");
}else if (trabajo === true && energia === true && clima === !true){
    alert("Trabaja desde casa!!");
}