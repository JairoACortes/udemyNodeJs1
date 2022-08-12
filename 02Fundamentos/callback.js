setTimeout(() => console.log("hola mundo"), 1000);


const getUserByID = (Id, callback)=>{
    const user = {
        Id,
        name: "Jairo"
    };
    setTimeout(()=>callback(user),1500);
}

getUserByID(20, (user)=>{console.log(user)});