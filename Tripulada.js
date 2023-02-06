const { NaveEspacial } = require("./NaveEspacial");


 class Tripulada extends NaveEspacial {
    tipoMotor;
    nroPasajeros;
  
     constructor(nombre, peso, combustible, potencia, tipoNave, nroPasajeros,tipoMotor) {
        super(nombre, peso, combustible, potencia, tipoNave);
        this.nroPasajeros = nroPasajeros;
        this.tipoMotor = tipoMotor;
       
    }
 }

 module.exports.Tripulada= Tripulada;