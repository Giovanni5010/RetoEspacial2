const { NaveEspacial } = require("./NaveEspacial");

 class NoTripulada extends NaveEspacial {
    tipoPropulsion;
    
    
 
    constructor(nombre, peso, combustible, potencia, tipoNave, tipoPropulsion) {
       
       this.tipoPropulsion = tipoPropulsion;      
     
       super(nombre, peso, combustible, potencia, tipoNave);
 
 
   }
 }

 module.exports.NoTripulada= NoTripulada;
