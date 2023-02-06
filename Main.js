/* const classNaveEspacial= require("./NaveEspacial"); */

const process = require('node:process');






const gestionNaves = (d) => {
    const arrayNavesCreadas = [];
     var userOption;
     
   
    /* let isEnd = 0, isCrearNave = 0, opcCrearNave = 1, opcMenuP;

    while (isEnd === 0) {

        
 
        validaciones.validarNro(1,3,'Bienvenido, Digita una opc: \n 1.Crear nave \n 2. Buscar Nave \n 3 Salir');

         
        console.log('aqui',opcMenuP);
        if (opcMenuP === 1) { //CREAR NAVES
            while (isCrearNave === 0) {
               // console.log(`Bienvenido, Digita una opc: \n 1.Lanzadora \n 2. No Tripulada \n 3. Tripulada`);
                
               if (opcCrearNave === 1) {//creo nave lanzadora
                    console.log('entre');
                    ObjLanzadora = new Lanzadora('lanza1', 20, 200, 3000, 'Lanzadora', 'pesada');
                    arrayNavesCreadas.push(ObjLanzadora);
                    console.log(arrayNavesCreadas);
                    ObjLanzadora = null;
                    console.log(ObjLanzadora);
                } else if (opcCrearNave === 2) {//creo nave no tripulada
                    ObjNoTripulada = new NoTripulada();
                    arrayNavesCreadas.push(ObjNoTripulada);
                    ObjNoTripulada = null;

                } else {//creo nave tripulada
                    ObjTripulada = new ObjTripulada();
                    arrayNavesCreadas.push(ObjTripulada);
                    ObjTripulada = null;

                }
                isCrearNave = 1;
            }
        } else if (opcMenuP === 2) {//Buscar naves
            menuFiltrarNaves(arrayNavesCreadas);
        } else {
            isEnd = 1;
        }
        isEnd = 1;




    } */
}
gestionNaves();


//const arrayNavesCreadass = [new Lanzadora('lanza1', 20, 200, 3000, 1, 'pesada'), new Lanzadora('lanza2', 20, 200, 3000, 1, 'pesada'), new Tripulada('lanza3', 20, 200, 3000, 2, 'pesada')]

const menuFiltrarNaves = (arrayNavesCreadass) => {

    let isEnd = 0, isFiltar = 0, opcCrearNave = 1, opcMenuP = 1, aux = 1;

    while (isFiltar === 0) {
        console.log(`Digita por favor una opcion por la de deseas buscar: \n 
        1. Buscar por tipo de nave \n 
        2. Buscar por nombre de la nave\n 
        3. Buscar por peso de la nave\n 
        4. Buscar por concidencia del nombre de la nave\n 
        5. Buscar por potencia mayor al numero ingresado\n 
        6. Salir\n`);

        if (opcCrearNave === 1) {//creo nave lanzadora
            console.log(`         Ingrese el tipo de la nave que desea buscar:
            1.Lanzadora
            2.Robotica
            3.Tripulada`);

            let result = arrayNavesCreadass.filter((value) => value.tipoNave === aux);

            for (const value of result) {
                console.log(`Nombre: ${value.nombre} tipo: ${value.tipoNave} `);
            }





        } else if (opcCrearNave === 2) {//creo nave no tripulada
            ObjNoTripulada = new NoTripulada();
            arrayNavesCreadas.push(ObjNoTripulada);
            ObjNoTripulada = null;

        } else {//creo nave tripulada
            ObjTripulada = new ObjTripulada();
            arrayNavesCreadas.push(ObjTripulada);
            ObjTripulada = null;

        }
        isCrearNave = 1;


        isfilter = 1;




    }

}
//menuFiltrarNaves(arrayNavesCreadass);