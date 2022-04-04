//Tipo de datoas ANY permite declarar cualquier tipo de datoaa
var cantidad = 4;
var desc = [1, true, "verde"];
//Primitivos
//String
var saludo = "Hola mundo";
var nombre = "Mateo";
var Saludo = 'Hola me llamo ${nombre}.'; // se puede combinar dos variable string
//numbre
var numero = 6;
//boolean
var estado = false;
//void
function mensajeUsuario() {
    console.log("Este es una mensaje para el usuario");
}
//enum
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
var colorAuto = Color.Blanco;
console.log(colorAuto); //devolveria 0
