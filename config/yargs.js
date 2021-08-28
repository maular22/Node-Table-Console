const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla por consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "Es el numero por el cual se va a multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser numerica";
    }
    if (isNaN(argv.h)) {
      throw "el limite tiene que ser numerico";
    }
    return true;
  }).argv;

module.exports = argv;
