class Turbina{
    private numTurbinas: number = 0;
    
    public constructor(n: number){
        this.numTurbinas = n;
    }
    public toString(){
        return this.numTurbinas + "Turnina/s"
    }
}

class Helice{
    private numHelices: number = 0;

    public constructor(n: number){
        this.numHelices= n;
    }
    public toString(){
        return this.numHelices + " Helice/s;"
    }

}

class TrenDeAterrizaje{
    private numTrenDeAterrizaje:number = 0;

    public constructor(n:number){
        this.numTrenDeAterrizaje= n;
    }

    public toString(){
        return this.numTrenDeAterrizaje + " Tren de Aterrizaje/s"
    }
}

class Alas{
    private numAlas:number = 0;

    public constructor(n:number){
        this.numAlas=n;
    }
    
    public toString(){
        return this.numAlas + " Alas;"
    }
}

class Cubierta{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaDeEmergencia:boolean = false;
    private numTanquesCombustibles:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor(unCabinaTripulacion:boolean,unCabinaVuelo:boolean,unSistemaEmergencia:boolean,unosTanqueCombustible:number,unasPuertasDeSalida:number){
        this.cabinaTripulacion = unCabinaTripulacion;
        this.cabinaVuelo = unCabinaVuelo;
        this.sistemaDeEmergencia = unSistemaEmergencia;
        this.numTanquesCombustibles = unosTanqueCombustible;
        this.numPuertasSalidas = unasPuertasDeSalida;
    }

    public toString(){
        let mensaje = "cubierta compuesta de: ";
        if(this.cabinaVuelo){
            mensaje+= " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion){
            mensaje+= " Cubierta de Tripulacion, ";
        }
        if (this.sistemaDeEmergencia){
            mensaje+= " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustibles + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}

class Aeroplano{
    private helice: Helice;
    private trenDeAterrizaje: TrenDeAterrizaje;
    private alas: Alas;
    private cubierta: Cubierta;

    constructor (pHelice:Helice, pTrenDeAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta){
        this.helice= pHelice;
        this.trenDeAterrizaje= pTrenDeAterrizaje;
        this.alas= pAlas;
        this.cubierta= pCubierta;
    }
    public toString(){
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.toString();
        mensaje += this.trenDeAterrizaje.toString()
        mensaje += this.alas.toString();
        mensaje += this.cubierta.toString();
        return mensaje;
    }
} 