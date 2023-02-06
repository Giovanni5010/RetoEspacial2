const { NaveEspacial } = require("./NaveEspacial");

 class Lanzadora extends NaveEspacial{
    tipoCarga;
    nroMotores;
  
     constructor(nombre, peso, combustible, potencia, tipoNave, tipoCarga,nroMotores) {
        
        super(nombre, peso, combustible, potencia, tipoNave);
        this.tipoCarga = tipoCarga;
        this.nroMotores = nroMotores;
    

   }
  }
 module.exports.Lanzadora= Lanzadora;