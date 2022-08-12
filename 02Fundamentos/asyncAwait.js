const empleados=[
    {
        id: 1,
        name: "Fernando"
    },
    {
        id: 2,
        name: "Cristian"
    },
    {
        id: 3,
        name: "Jairo"
    }
];

const salarios=[
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (Id, callback)=> {
    const empleado = empleados.find(employee => employee.id == Id);
    return new Promise( (resolve, reject)=>{
        (empleado) ? resolve(empleado) : reject ('No existe empleado con esa id');
    })
}

const getSalario = (Id,callback) =>{
    const salario = salarios.find(employee => employee.id == Id);
    return new Promise((resolve, reject)=>{
        (salario) ? resolve(salario.salario) : reject("Error 404, Salary not found");
    })
}

const getInfoUsuario = async() => {
    try{
        const empleado = await getEmpleado(id);
        return empleado;
    }
    catch (err){
        throw err;
    }
    
}
const id = 4;

getInfoUsuario(id).then(msg => console.log(msg)).catch(err=>console.log(err));
