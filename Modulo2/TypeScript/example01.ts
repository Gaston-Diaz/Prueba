let a: number;  //Inferencia explícita
let b: string;  //Inferencia explícita
let c=101;      //Inferencia implícita
//El primer arreglo es de string para hacer que solo admita un tipo hay que especificarlo
let recursos=['memoria','disco','procesador']; 
let recursos2=['memoria','disco',100];
let soloString: string[] = ['memoria','disco','procesador']; //asi se especifica que solo sea de un tipo
//c="one"; al querer asignar un string ocurre un error ya que el tipo de c es number
