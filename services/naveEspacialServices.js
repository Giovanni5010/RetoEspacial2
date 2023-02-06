const naveEspacialModel = require('../models/NaveEspacial');

const createNaveEspacial = async (data)=>{
    const addNaveEspacial= await naveEspacialModel.create(data)    
    console.log(`se agrego correctamente`);
    return addNaveEspacial;
}

const getNaveEspacial = async ()=>{
    const arrayNavesDB= await naveEspacialModel.find()
    return arrayNavesDB;
}

module.exports = {
    createNaveEspacial,
    getNaveEspacial
}