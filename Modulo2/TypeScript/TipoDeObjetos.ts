//ARRAY
let list: string[] =['pimiento','papas','tomate'];
let booleanos: boolean[] =[true, false, false, true];
let cualquiera: any[] =[9, true, 'algo'];
let diametro: [string,number]=['saturno', 116460];
//GENERIC
function identity<T>(arg: T): T{
    return arg;
}
//OBJECT
let persona: object={nombre:"ana", edad:45};
//DESESTRUCTURACION
//ejemplo con objeto
var obj = {a:1, b:2, c:3};
console.log(obj.c);
//ejemplo con array
var array= [1, 2, 3];
console.log(array[2]);
//DESESTRUCTURACION
var array2= [1, 2, 3, 5];
var [x, y, ...rest]= array;
console.log(rest);
/*ESTRUCTURACION
function rest(first, second, ..allOthers)
{console.log(allOthers);}
rest('1', '2', '3', '4', '5'); retorna 3,4,5 */
