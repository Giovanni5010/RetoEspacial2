const naveEspacialModel = require('../models/NaveEspacial');

const createNaveEspacial = async (data)=>{
    const addNaveEspacial= await naveEspacialModel.create(data)
    return addNaveEspacial;
}

module.exports = {
    createNaveEspacial
}