/* function nombre (parametro1, parametro2){
    instrucciones a ejecutar
    } 
*/
function calcularIva(productos: Producto[]): [number, number]{
    let total =0;
    productos.forEach(({precio}) => {total+= precio;});
    return[total, total *0.15];
}
// clase producto
class Producto{
    precio:number;
}