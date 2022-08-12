const { boolean } = require("yargs");
const yargs = require("yargs");
const argv = require("yargs")
    .option("b",{
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Is the base for the table"
    })
    .option("l",{
        alias: "listar",
        type: "boolean",
        default: false,
        demandOption: false,
        describe: "Shows the answer/table (toggle)"
    })
    .option("h",{
        alias: "hasta",
        type: "number",
        default: 10,
        demandOption: false,
        describe: "Sets the top of the table"
    })
    .check((argv, options)=>{
        if (isNaN(argv.b)){
            throw "the base must be a number!"
        }
        return true;
}).argv;


module.exports = argv;