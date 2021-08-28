const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
require("colors");

console.clear();

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;
//console.log("la base es ", argv);

crearArchivo(base, listar, hasta)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.brightBlue, "Creado con exito")
  )
  .catch((error) => cosole.log(error));
