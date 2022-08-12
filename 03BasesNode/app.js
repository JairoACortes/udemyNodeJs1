require("colors");
const {createFile} = require("./Helpers/multiplicaiton");
const argv = require("./config/yargs")

console.clear();
// console.log(argv);
console.log("base = "+argv.base+"; listado = "+argv.l+"; Límite = "+argv.h)
// No recomendado
// const [,,arg3 = 'base=5'] = process.argv
// const [,base] = arg3.split("=");

// const base = 8;

createFile(argv.b,argv.l,argv.h).then(a => console.log(a,"creado")).catch(err => console.log(err));