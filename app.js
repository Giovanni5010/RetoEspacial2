const createNaveEspacial = require("./services/naveEspacialServices");
const classTripulada = require("./Tripulada");
const classNoTripulada = require("./NoTripulada");
const classLanzadora = require("./Lanzadora");

//yarm
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

//conexion Mongo DB
const user = "barrientos_05";
const password = "1234";
const uri = `mongodb+srv://barrientos_05:${password}@navesespaciales.gwbgjs3.mongodb.net/?retryWrites=true&w=majority`;
const mongoose = require("mongoose");
mongoose
  .connect(uri, { UseNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

//menu();

if (argv.opc1 === 1) {
  console.log("entre", argv);
} else {
  console.log(" no entre", argv);
}

const gestionNaves = (d) => {
  const arrayNavesCreadas = [];
  var userOption;

  let isEnd = 0,
    filtroNave = argv.opc3,
    opcCrearNave = argv.opc2,
    opcMenuP = argv.opc1,
    filtrarPor = argv.tipoNave;
  console.log(opcMenuP);
  console.log(opcCrearNave);

  while (isEnd === 0) {
    console.log(
      "Bienvenido, Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir \n"
    );
    console.log(`Dato ingresado es ${argv.opc1}`);

    if (opcMenuP === 1) {
      //CREAR NAVES
      //while (isCrearNave === 0) {
      // console.log(`Bienvenido, Digita una opc: \n 1.Lanzadora \n 2. No Tripulada \n 3. Tripulada`);
      console.log(
        "Bienvenido, Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir \n"
      );
      console.log(`Dato ingresado es ${argv.opc2}`);
      switch (opcCrearNave) {
        case 1:
          console.log("entre");
          ObjLanzadora = new classLanzadora.Lanzadora(
            "lanza4",
            20,
            200,
            3000,
            "Lanzadora",
            "pesada",
            3
          );

          console.log(`Objeto a guardar ${ObjLanzadora}`);
          createNaveEspacial.createNaveEspacial(ObjLanzadora);
          ObjLanzadora = null;
          break;

        case 2:
          ObjNoTripulada = new classNoTripulada.NoTripulada(
            "Notripulada1",
            3456,
            "hidrogeno",
            2346,
            "NoTripulada",
            "gasolina"
          );
          console.log(`Objeto a crear ${ObjNoTripulada}`);
          createNaveEspacial.createNaveEspacial(ObjNoTripulada);
          ObjNoTripulada = null;

          break;
        case 3:
          ObjTripulada = new classTripulada.Tripulada(
            "tripulada1",
            "gasolina",
            5343,
            3244,
            "Tripulada",
            234,
            "turboCagado"
          );

          createNaveEspacial.createNaveEspacial(ObjTripulada);
          ObjTripulada = null;
          break;
        default:
          console.log("ERROR!");
      }
      //}
    } else if (opcMenuP === 2) {
      //Buscar naves
      let arrayNavesDB = createNaveEspacial.getNaveEspacial();
      console.log(arrayNavesDB);

      if (filtroNave === 1) {
        console.log("todas las naves");
        
      }
    } else {
      isEnd = 1;
    }
    isEnd = 1;
  }
};
gestionNaves();

async function dataNavesEspaciales() {
  console.log("entre");
  try {
    let menuPP = await menuPromise();
  } catch (error) {
    console.log("error");
  }
}

//console.log('Bienvenido, Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir')
async function menuPromise(cadena) {
  return new Promise((resolve, reject) => {
    let arrayNavesDB = createNaveEspacial.getNaveEspacial();
    return arrayNavesDB
  });
}

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
