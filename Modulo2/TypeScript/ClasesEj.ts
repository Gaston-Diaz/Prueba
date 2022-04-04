/* class <nombre de la clase>
{
    atributos
    metodos
}
*/
class Persona{
    readonly nombre: string;
    readonly apellido: string; //ATRIBUTOS 
    private añoNac: number;
    constructor (nombre: string, apellido: string){
        this.nombre = nombre;               //CONSTRUCTOR
        this.apellido = apellido;
    }
    public toString(): string{
        return this.nombre + this.apellido;         //METODOS
    }
    public edad(añoActual: number): number{
        return (añoActual - this.añoNac);
    }
}

/*  CLASE
    class Persona{
        //ATRIBUTOS
        nombre: string;
        apellido: string;
        añoNac: number;
    }

    METODO
    edadAproximada(añoActual:number):number{
        return añoActual - this.añoNac;
    }

    CONSTRUCTOR
    constructor(nombre: string, apellido:string){
        this.nombre: nombre;
        this.apellido: apellido;
    }

    GETTERS
    get Nombre():string{
        return this.nombre
    }
    get AñoNacimiento():number{
        return this.añoNac
    }

    SETTERS
    set Nombre(nombre: string){
        this.nombre= nombre;
    }
    set AñoNacimiento(añoN: number){
        this.añoNac= año;
    }
*/