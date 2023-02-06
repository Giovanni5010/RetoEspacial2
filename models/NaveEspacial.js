
const  mongoose = require("mongoose");

const naveEspacialSchema= new mongoose.Schema({
    
    nombre: String ,
   peso:Number,
   conbustible:Number,
   potencia:Number,
   tipoNave:String,
   tipoPropulsion:String,
   tipoCatalizador:String,
   nroPasajeros:Number,
   tipoMotor:String,
   nroMotores:Number,
   tipoCarga:String
});

module.exports = mongoose.model('naveEspacial',naveEspacialSchema);