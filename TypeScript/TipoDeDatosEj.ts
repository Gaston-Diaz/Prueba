//Tipo de datoas ANY permite declarar cualquier tipo de datoaa
let cantidad: any = 4;
let desc: any[] = [1, true,"verde"];
//Primitivos
//String
let saludo: string= "Hola mundo";
let nombre: string= "Mateo";
let Saludo: string = 'Hola me llamo ${nombre}.'; // se puede combinar dos variable string
//numbre
let numero: number= 6;
//boolean
let estado: boolean= false;
//void
function mensajeUsuario(): void{
    console.log("Este es una mensaje para el usuario");
}
//enum
enum Color{
    Blanco,
    Rojo,
    Verde,
}
let colorAuto: Color= Color.Blanco;
console.log(colorAuto); //devolveria 0
