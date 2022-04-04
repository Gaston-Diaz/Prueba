class Operacion{
    protected valorA: number;
    protected valorB: number;
    protected result: number;

    constructor(){
        this.valorA= 0;
        this.valorB= 0;
        this.result= 0;
    }

    set ValorA(value: number){
        this.valorA= value;
    }
    set ValorB(value: number){
        this.valorB= value;
    }
    get Resultado():number{
        return this.result;
    }
}
class Suma extends Operacion{
    Sumar(){
        this.result = this.valorA + this.valorB; 
    }
}
class Resta extends Operacion{
    Restar(){
        this.result = this.valorA + this.ValorB;
    }
}

let operacionSuma = new Suma();
operacionSuma.ValorA= 45;
operacionSuma.ValorB= 10;
operacionSuma.Sumar();
console.log("El resultado es: " + operacionSuma.Resultado);

let operacionResta = new Resta();
operacionResta.ValorA = 45;
operacionResta.ValorB = 10;
operacionResta.Restar();
console.log("El resultado es: "+ operacionResta.Resultado);