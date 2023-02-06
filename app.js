const createNaveEspacial= require('./services/naveEspacialServices');


const user = 'barrientos_05';
const password = '1234';
const uri = `mongodb+srv://barrientos_05:${password}@navesespaciales.gwbgjs3.mongodb.net/?retryWrites=true&w=majority`;
const mongoose= require('mongoose');
mongoose.connect(uri,{UseNewUrlParser : true, useUnifiedTopology :true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));


const classTripulada= require("./Tripulada");
const classNoTripulada= require("./NoTripulada");
const classLanzadora= require("./Lanzadora");



console.log('Bienvenido, Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir')
const gestionNaves = new Promise(resolve => {
    process.stdin.on('readable', () => {
        
        let chunk,chunk2=1;
        while ((chunk = process.stdin.read()) !== null) {
            // return process.stdout.write(`Tu nombre: ${chunk}`);
            chunk = chunk.toString().trim();
            console.log(chunk)
          
            
                switch(chunk2) {
                    case '1': 
                        console.log('Seleccionaste 1')       
                                     
                        switch(chunk) {
                            case '1': 
                                console.log('entre');
                                ObjLanzadora = new classLanzadora.Lanzadora('lanza2', 20, 200, 3000, 'Lanzadora', 'pesada',3);
                                //arrayNavesCreadas.push(ObjLanzadora);
                                //console.log(arrayNavesCreadas);
                                //ObjLanzadora = null;
                                console.log(ObjLanzadora);
                                createNaveEspacial.createNaveEspacial(ObjLanzadora);
                                break
                                
                            case '2': 
                                ObjNoTripulada = new classNoTripulada.NoTripulada('tripulada1',3456,'hidrogeno',2346,'NoTripulada','gasolina');
                                arrayNavesCreadas.push(ObjNoTripulada);
                                ObjNoTripulada = null;
                                break
                            case '3': 
                                ObjTripulada = new classTripulada.Tripulada('tripulada1','gasolina',5343,3244,'Tripulada',234,'turboCagado');
                                arrayNavesCreadas.push(ObjTripulada);
                                ObjTripulada = null;
                                break
                            default:
                                console.log('ERROR!')
                                
                                
                        }
                      
                        break
                    case '2': 
                        console.log('Seleccionaste 2')
                        
                        break
                    case '3': 
                        console.log('Adios')
                        process.exit();
                        break
                    default:
                        console.log('ERROR!')
                        
                }
                if((chunk < 1 || chunk > 3)){
                    console.log('opción Incorrecta  Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir')
                }
             
        }
        
        resolve(chunk);
    });
});
/* function crearNave(){
    console.log(`Bienvenido, Digita una opc: \n 1.Lanzadora \n 2. No Tripulada \n 3. Tripulada`);
    const menuCrearNave=  new Promise(resolve => {
        process.stdin.on('readable', () => {
            
            let opctipoNave;
            while ((opctipoNave = process.stdin.read()) !== null) {
                //  process.stdout.write(`Tu nombre: ${opctipoNave}`);
                opctipoNave = opctipoNave.toString().trim();
                console.log(opctipoNave)
              
                
                    switch(opctipoNave) {
                        case '1': 
                            console.log('entre');
                            ObjLanzadora = new classLanzadora.Lanzadora('lanza1', 20, 200, 3000, 'Lanzadora', 'pesada');
                            //arrayNavesCreadas.push(ObjLanzadora);
                            //console.log(arrayNavesCreadas);
                            //ObjLanzadora = null;
                            console.log(ObjLanzadora);
                            break
                            
                        case '2': 
                            ObjNoTripulada = new NoTripulada();
                            arrayNavesCreadas.push(ObjNoTripulada);
                            ObjNoTripulada = null;
                            break
                        case '3': 
                            ObjTripulada = new ObjTripulada();
                            arrayNavesCreadas.push(ObjTripulada);
                            ObjTripulada = null;
                            break
                        default:
                            console.log('ERROR!')
                            
                            
                    }
                    if((opctipoNave < 1 || opctipoNave > 3)){
                        console.log('Bienvenido, Digita una opc: \n 1.Lanzadora \n 2. No Tripulada \n 3. Tripulada')
                    }
                 
            }
            
            resolve(opctipoNave);
        });
    });
}
 */