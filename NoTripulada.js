const { NaveEspacial } = require("./NaveEspacial");

 class NoTripulada extends NaveEspacial {
    tipoPropulsion;
    
    
 
    constructor(nombre, peso, combustible, potencia, tipoNave, tipoPropulsion) {
      super(nombre, peso, combustible, potencia, tipoNave);
       this.tipoPropulsion = tipoPropulsion;          
       
 
 
   }
 }

 module.exports.NoTripulada= NoTripulada;
