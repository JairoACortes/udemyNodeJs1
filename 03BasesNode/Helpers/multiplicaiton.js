const fs = require('fs');
const colors = require("colors");
const createFile = async(base=5,listar,top) =>{
    try{
        if(listar){
            console.log("====================");
            console.log(' Tabla del '+colors.red(base));
            console.log("====================");
        }
        let answer = ``;
        for (let i = 1; i<=top; i++){
            answer += `${i*base}\n`
        };
        fs.writeFile(`tablaDel${base}.txt`, answer,(err)=>{
            if (err) throw err; 
        });
        if(!listar){return null;}
        return(answer);
    }
    catch(err){
        throw err;
    }

}

module.exports = {
    createFile
}